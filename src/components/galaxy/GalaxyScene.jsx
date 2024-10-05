import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as dat from "dat.gui";

const GalaxyScene = () => {
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        const params = {
            counts: 300000,
            size: 0.007,
            radius: 2,
            branches: 8,
            spin: 2,
            randomness: 1.63,
            insideColor: "#d9b59c",
            midColor: "#ff8700",
            outsideColor: "#5f00a2",
            colorTransitionSpeed: 0.25, // Speed of color change
        };

        let colorTransitionFactor = 0; // Factor for color interpolation
        let increasing = true; // Flag to determine direction of color transition

        const colorInside = new THREE.Color(params.insideColor);
        const midColor = new THREE.Color(params.midColor);
        const colorOutside = new THREE.Color(params.outsideColor);

        const gui = new dat.GUI();
        gui.hide();

        const scene = new THREE.Scene();

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const isMobile = window.innerWidth < 768;
        const cameraDistance = isMobile ? 5.5 : 3;
        const camera = new THREE.PerspectiveCamera(60, 1, 1, 1000);
        camera.position.z = cameraDistance;
        camera.position.y = 2.5;
        scene.add(camera);

        const generateStars = () => {
            const counts = 10000;
            const starsGeometry = new THREE.BufferGeometry();
            const positionsArray = new Float32Array(counts * 3);

            for (let i = 0; i < counts * 3; i++) {
                positionsArray[i] = (Math.random() - 0.5) * 90;
            }

            starsGeometry.setAttribute("position", new THREE.BufferAttribute(positionsArray, 3));
            const starsPoints = new THREE.Points(
                starsGeometry,
                new THREE.PointsMaterial({
                    size: 0.05,
                    color: 0xffffff,
                    sizeAttenuation: true,
                    transparent: true,
                    alphaTest: 0.0001,
                    depthTest: false,
                    depthWrite: true,
                })
            );
            scene.add(starsPoints);
        };
        generateStars();

        let galaxyGeometry = null,
            galaxyMaterial = null,
            galaxyPoints = null;

        const generateGalaxy = () => {
            if (galaxyPoints !== null) {
                galaxyGeometry.dispose();
                galaxyMaterial.dispose();
                scene.remove(galaxyPoints);
            }

            galaxyGeometry = new THREE.BufferGeometry();
            const positionArray = new Float32Array(params.counts * 3);
            const colorsArray = new Float32Array(params.counts * 3);

            for (let i = 0; i < params.counts * 3; i++) {
                let vertex = i * 3;
                let r = Math.random() * params.radius;
                let b = i % params.branches;
                let ba = b / params.branches;
                let ap = ba * Math.PI * 2;
                let sp = (params.spin / r) * 1.17;

                let rx = (Math.random() - 0.5) * 0.2 * (params.randomness * (r / 1.1));
                let ry = (Math.random() - 0.5) * 0.2 * (params.randomness * (r / 1.5));
                let rz = (Math.random() - 0.5) * 0.2 * (params.randomness * (r / 1.1));

                positionArray[vertex] = (Math.cos(ap + sp) + rx) * r;
                positionArray[vertex + 1] = ry;
                positionArray[vertex + 2] = (Math.sin(ap + sp) + rz) * r;

                galaxyGeometry.setAttribute("position", new THREE.BufferAttribute(positionArray, 3));

                // Interpolate color based on position
                const mixedColor = colorInside.clone();
                mixedColor.lerpColors(midColor, colorOutside, r / params.radius);
                colorsArray[vertex] = mixedColor.r;
                colorsArray[vertex + 1] = mixedColor.g;
                colorsArray[vertex + 2] = mixedColor.b;

                galaxyGeometry.setAttribute("color", new THREE.BufferAttribute(colorsArray, 3));
            }

            galaxyMaterial = new THREE.PointsMaterial({
                size: params.size,
                sizeAttenuation: true,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
                vertexColors: true,
                transparent: true,
            });

            galaxyPoints = new THREE.Points(galaxyGeometry, galaxyMaterial);
            scene.add(galaxyPoints);

            camera.lookAt(galaxyPoints.position);
        };

        gui.add(params, "counts").min(300).max(500000).step(1).onFinishChange(generateGalaxy);
        gui.add(params, "size").min(0.001).max(0.01).step(0.0001).onFinishChange(generateGalaxy);
        gui.add(params, "radius").min(1).max(7).step(1).onFinishChange(generateGalaxy);
        gui.add(params, "branches").min(3).max(20).step(1).onFinishChange(generateGalaxy);
        gui.add(params, "spin").min(1).max(2).step(0.001).onFinishChange(generateGalaxy);
        gui.add(params, "randomness").min(1).max(5).step(0.01).onFinishChange(generateGalaxy);
        gui.add(params, "colorTransitionSpeed").min(0.1).max(5).step(0.1);

        generateGalaxy();

        const renderer = new THREE.WebGLRenderer({ canvas });
        const setRendererSize = () => {
            const { width, height } = canvas.parentElement.getBoundingClientRect();
            sizes.width = width;
            sizes.height = height;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
            renderer.setPixelRatio(2);
        };
        setRendererSize();

        let mouseX = 0,
            mouseY = 0;

        window.addEventListener("mousemove", (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        const clock = new THREE.Clock(true);
        const animation = () => {
            const elapsed = clock.getElapsedTime();

            // Dynamically change colors over time
            if (increasing) {
                colorTransitionFactor += params.colorTransitionSpeed * 0.01;
                if (colorTransitionFactor >= 1) increasing = false;
            } else {
                colorTransitionFactor -= params.colorTransitionSpeed * 0.01;
                if (colorTransitionFactor <= 0) increasing = true;
            }

            // Interpolating between colorInside and colorOutside
            const currentColor = colorInside.clone().lerp(colorOutside, colorTransitionFactor);
            galaxyMaterial.color = currentColor;
            const targetRotationX = THREE.MathUtils.clamp(mouseY * 0.1, -Math.PI / 2, Math.PI / 2);
            const targetRotationY = THREE.MathUtils.clamp(mouseX * 0.1, -Math.PI / 2, Math.PI / 2);

            renderer.render(scene, camera);
            galaxyPoints.rotation.y = elapsed * -0.09;
            galaxyPoints.rotation.x += (targetRotationX - galaxyPoints.rotation.x) * 0.05;
            galaxyPoints.rotation.y += (targetRotationY - galaxyPoints.rotation.y) * 0.05;
            
            window.requestAnimationFrame(animation);
        };
        animation();

        window.addEventListener("resize", setRendererSize);

        return () => {
            window.removeEventListener("resize", setRendererSize);
            gui.destroy(); // Clean up GUI when component is unmounted
        };
    }, []);

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <canvas ref={canvasRef} className="canvas" />
        </div>
    );
};

export default GalaxyScene;
