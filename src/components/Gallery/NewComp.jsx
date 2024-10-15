import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "../../css/style.css";

gsap.registerPlugin(ScrollTrigger);
const NewComp = () => {
    const component = useRef();
    const horizontalRef = useRef();
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".card-wrapper");
            gsap.to(cards, {
                xPercent: () => -(100 * 4.5), // Moves content left
                ease: "none",
                scrollTrigger: {
                    trigger: component.current,
                    start: "top top", // Start when the section reaches the top of the viewport

                    end: () => `+=${horizontalRef.current.scrollWidth/10}`, // End after full scroll

                    scrub: true, // Smooth scrolling
                    pin: true, // Pinned scroll
                    // markers: true
                },
            });
        }, component);
        return () => ctx.revert();
    });
    return (

        <div data-scroll-container id="main">
            <div id="page1">
                <img
                    className="img"
                    src="https://assets.unicorn.studio/images/GXG3EqMyo8U7uJtwHU4g7q9bEPZ2/romzi98nicolaro8383_httpss.mj.runaiMyLIMjPpQ_vintage_style_rend_8e51a5a3-e589-41e1-8da7-0240fe221866.webp"
                    alt=""
                />
                <div className="marque">
                    <h1>// Explore new Realm</h1>
                    <h1>// Explore new Realm</h1>
                    <h1>// Explore new Realm</h1>
                    <h1>// Explore new Realm</h1>
                </div>
            </div>
            <div id="page2" ref={component}>
                <div className="horizontal" ref={horizontalRef}>
                    <div className="loading">
                        <h4>// uploading collection...</h4>
                    </div>
                    <div className="text card-wrapper max-sm:absolute max-sm:top-0 max-w-40:left-20 max-sm:left-28 max-sm:text-6xl">

                        <h4>// into the past</h4>
                        <h1>Explore</h1>
                        <h1>AI wonders</h1>
                    </div>
                    <div className="pcard card-wrapper">
                        <div className="img-div">
                            <img src="\galleryImages\IMG_0108.JPG" alt="" />
                        </div>

                    </div>
                    <div className="pcard card-wrapper">
                        <div className="img-div">
                            <img
                                src="\galleryImages\IMG_20231016_030245.jpg"
                                alt=""
                            />
                        </div>

                    </div>
                    <div className="pcard card-wrapper">
                        <div className="img-div">
                            <img src="\galleryImages\DSC00155.JPG" alt="" />
                        </div>

                    </div>
                    <div className="pcard card-wrapper">
                        <div className="img-div">
                            <img src="\galleryImages\DSC00166.JPG" alt="" />
                        </div>

                    </div>
                    <div className="pcard card-wrapper">
                        <div className="img-div">
                            <img src="\galleryImages\DSC04241.JPG" alt="" />
                        </div>

                    </div>

                </div>
            </div>
            {/* <div id="page3">
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
                </div> */}
        </div>
        // </HelmetProvider>
    );
};
export default NewComp;