import React, { useRef, useEffect } from "react";
import * as THREE from "https://cdn.skypack.dev/three@0.136.0";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls";

const Galaxy = () => {
    const mountRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        // Scene setup
        let scene = new THREE.Scene();
        scene.background = null; // Transparent background

        const isMobile = window.innerWidth < 768;
        const cameraDistance = isMobile ? 150 : 60;

        // Camera setup
        let camera = new THREE.PerspectiveCamera(60, 1, 1, 1000);
        camera.position.set(0, 4, cameraDistance);

        // Parent Object for camera
        let cameraParent = new THREE.Object3D();
        cameraParent.add(camera);
        scene.add(cameraParent);

        // Renderer setup
        let renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        // Resize handler
        const setRendererSize = () => {
            const { width, height } = mountRef.current.getBoundingClientRect();
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        setRendererSize();

        window.addEventListener("resize", setRendererSize);

        // Orbit Controls
        let controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.enableZoom = false;

        // Shader uniforms and geometry setup
        let gu = { time: { value: 0 } };
        let sizes = [];
        let shift = [];

        const pushShift = () => {
            shift.push(Math.random() * Math.PI, Math.random() * Math.PI * 2, (Math.random() * 0.9 + 0.1) * Math.PI * 0.1, Math.random() * 0.9 + 0.1);
        };

        const TOTAL_POINTS = 20000;
        const RANDOM_POINTS = 10000;
        const CYLINDRICAL_POINTS = TOTAL_POINTS - RANDOM_POINTS;

        let pts = new Array(RANDOM_POINTS).fill().map(() => {
            const point = new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * 0.5 + 9.5);
            sizes.push(Math.random() * 1.5 + 0.5);
            pushShift();
            return point;
        });

        for (let i = 0; i < CYLINDRICAL_POINTS; i++) {
            let r = 10, R = 40;
            let rand = Math.pow(Math.random(), 1.5);
            let radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
            const cylindricalPoint = new THREE.Vector3().setFromCylindricalCoords(radius, Math.random() * 2 * Math.PI, (Math.random() - 0.5) * 2);
            pts.push(cylindricalPoint);
            sizes.push(Math.random() * 1.5 + 0.5);
            pushShift();
        }

        let g = new THREE.BufferGeometry().setFromPoints(pts);
        g.setAttribute("sizes", new THREE.Float32BufferAttribute(sizes.slice(0, pts.length), 1));
        g.setAttribute("shift", new THREE.Float32BufferAttribute(shift.slice(0, pts.length * 4), 4));

        let m = new THREE.PointsMaterial({
            size: 0.1,
            transparent: true,
            blending: THREE.AdditiveBlending,
            onBeforeCompile: (shader) => {
                shader.uniforms.time = gu.time;

                shader.vertexShader = `
                  uniform float time;
                  attribute float sizes;
                  attribute vec4 shift;
                  varying vec3 vColor;
                  ${shader.vertexShader}
                `
                    .replace(`gl_PointSize = size;`, `gl_PointSize = size * sizes;`)
                    .replace(
                        `#include <color_vertex>`,
                        `#include <color_vertex>
                    float d = length(abs(position) / vec3(40., 10., 40));
                    d = clamp(d, 0., 1.);
                    float colorShift = sin(time * 0.2) * 0.5 + 0.5;
                    vec3 color1 = mix(vec3(0., 0., 255.), vec3(0., 255., 0.), d) / 255.;
                    vec3 color2 = mix(vec3(128., 0., 128.), vec3(255., 215., 0.), d) / 255.;
                    vColor = mix(color1, color2, colorShift);
                  `
                    )
                    .replace(
                        `#include <begin_vertex>`,
                        `#include <begin_vertex>
                    float t = time;
                    float moveT = mod(shift.x + shift.z * t, PI2);
                    float moveS = mod(shift.y + shift.z * t, PI2);
                    transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.a;
                  `
                    );

                shader.fragmentShader = `
                  varying vec3 vColor;
                  ${shader.fragmentShader}
                `
                    .replace(
                        `#include <clipping_planes_fragment>`,
                        `#include <clipping_planes_fragment>
                    float d = length(gl_PointCoord.xy - 0.5);
                    if (d > 0.5) discard;
                  `
                    )
                    .replace(`vec4 diffuseColor = vec4( diffuse, opacity );`, `vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.2, d) * 0.5 + 0.5 );`);
            },
        });

        let p = new THREE.Points(g, m);
        p.rotation.order = "ZYX";
        scene.add(p);
        p.rotation.x = THREE.Math.degToRad(120);
        let clock = new THREE.Clock();

        let mouseX = 0,
            mouseY = 0;

        window.addEventListener("mousemove", (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        const animate = () => {
            let t = clock.getElapsedTime();
            gu.time.value = t * Math.PI;

            const targetRotationX = THREE.MathUtils.clamp(mouseY * 0.1, -Math.PI / 20, Math.PI / 20);
            const targetRotationY = THREE.MathUtils.clamp(mouseX * 0.1, -Math.PI / 20, Math.PI / 20);

            p.rotation.x += (targetRotationX - p.rotation.x) * 0.05;
            p.rotation.y += (targetRotationY - p.rotation.y) * 0.05;

            cameraParent.rotation.y += 0.0005;

            controls.update();
            renderer.render(scene, camera);

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup when component unmounts
        return () => {
            if (mountRef.current) {
                // mountRef.current.removeChild(renderer.domElement);
                cancelAnimationFrame(animationRef.current); // Stop the animation loop
                window.removeEventListener("resize", setRendererSize); // Remove event listeners
                window.removeEventListener("mousemove", (event) => {}); 
                renderer.dispose(); // Dispose the renderer
                mountRef.current.removeChild(renderer.domElement); // Remove renderer DOM element
            }
        };
    }, []);

    return (
        <div className="relative h-full w-full">
            <div className="z-10 h-full w-full" ref={mountRef} />
        </div>
    );
};

export default Galaxy;
