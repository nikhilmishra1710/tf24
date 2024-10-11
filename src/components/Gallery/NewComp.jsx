import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as THREE from "three";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "../../css/style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
gsap.registerPlugin(ScrollTrigger);
const NewComp = () => {
    const component = useRef();
    const horizontalRef = useRef();
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".card-wrapper");
            gsap.to(cards, {
                xPercent: () => -(100 * 2.5), // Moves content left
                ease: "none",
                scrollTrigger: {
                    trigger: component.current,
                    start: "top top", // Start when the section reaches the top of the viewport
                    end: () => `+=${horizontalRef.current.scrollWidth}`, // End after full scroll
                    scrub: true, // Smooth scrolling
                    pin: true, // Pinned scroll
                    // markers: true
                },
            });
        }, component);
        return () => ctx.revert();
    });
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="stylesheet" href="https://unpkg.com/sheryjs/dist/Shery.css" />
                <script src="https://unpkg.com/sheryjs/dist/Shery.js" async></script>
            </Helmet>
            <div data-scroll-container id="main">
                <div id="page1">
                    <img
                        className="img"
                        src="https://assets.unicorn.studio/images/GXG3EqMyo8U7uJtwHU4g7q9bEPZ2/romzi98nicolaro8383_httpss.mj.runaiMyLIMjPpQ_vintage_style_rend_8e51a5a3-e589-41e1-8da7-0240fe221866.webp"
                        alt=""
                    />
                    <div className="marque">
                        <h1>// Vintage vision</h1>
                        <h1>// Vintage vision</h1>
                        <h1>// Vintage vision</h1>
                        <h1>// Vintage vision</h1>
                    </div>
                </div>
                <div id="page2" ref={component}>
                    <div className="horizontal" ref={horizontalRef}>
                        <div className="loading">
                            <h4>// uploading collection...</h4>
                        </div>
                        <div className="text card-wrapper">
                            <h4>// into the past</h4>
                            <h1>Explore</h1>
                            <h1>AI wonders</h1>
                        </div>
                        <div className="card card-wrapper">
                            <div className="img-div">
                                <img src="https://assets.unicorn.studio/images/GXG3EqMyo8U7uJtwHU4g7q9bEPZ2/666969030d167d24e7e7fb0f_Atomic_drawn.webp" alt="" />
                            </div>
                            <div className="text-div">
                                <h1>hello</h1>
                            </div>
                        </div>
                        <div className="card card-wrapper">
                            <div className="img-div">
                                <img
                                    src="https://assets.unicorn.studio/images/GXG3EqMyo8U7uJtwHU4g7q9bEPZ2/romzi98nicolaro8383_httpss.mj.runcE8JPsPiaIg_httpss.mj.runNvX_b57f6609-3f4c-4fed-ae5c-3c423732a160_0.png"
                                    alt=""
                                />
                            </div>
                            <div className="text-div">
                                <h1>hello</h1>
                            </div>
                        </div>
                        <div className="card card-wrapper">
                            <div className="img-div">
                                <img src="https://cdn.prod.website-files.com/6655c62a26727b01b8bcb77c/6665ae11408e845cc851d9f4_Galactic_4.webp" alt="" />
                            </div>
                            <div className="text-div">
                                <h1>hello</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="page3">
                    <img
                        className="img"
                        src="https://assets.unicorn.studio/images/GXG3EqMyo8U7uJtwHU4g7q9bEPZ2/romzi98nicolaro8383_httpss.mj.runaiMyLIMjPpQ_vintage_style_rend_8e51a5a3-e589-41e1-8da7-0240fe221866.webp"
                        alt=""
                    />
                    <div className="marque">
                        <h1>// Futuristic flair</h1>
                        <h1>// Futuristic flair</h1>
                        <h1>// Futuristic flair</h1>
                        <h1>// Futuristic flair</h1>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};
export default NewComp;