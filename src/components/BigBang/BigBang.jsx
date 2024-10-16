import React, { useEffect, useState } from 'react';
import gsap from "gsap";
import "./bigbang.css";
import Loading from '@components/Loading/Loading';

function BigBang() {
    const [loading, setLoading] = useState(true)
    const [exit, setExit] = useState(false)
    useEffect(() => {

        const vid = document.querySelector("#bigbang-video")
        console.log(vid)
        vid.onloadeddata = () => {
            setLoading(false)
            animateLoader()
        }

    }, []);

    const animateLoader = () => {
        const counter1 = document.querySelector(".counter1");

        for (let i = 0; i <= 100; i++) {
            const div = document.createElement("div");
            div.className = "num";
            div.textContent = i;
            counter1.appendChild(div);
        }

        function animateCounter(counter, duration = 8) {
            const numHeight = counter.querySelector(".num").clientHeight;
            const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;

            gsap.to(counter, {
                y: -totalDistance,
                duration: duration,
                ease: "power2.inOut",
            });
        }
        animateCounter(counter1, 6.5);

        gsap.from(".loader", {
            width: 0,
            delay: 1.6,
            duration: 4.5,
            ease: "power2.inOut",
        });
        gsap.to(".loader", {
            width: 200,
            delay: 0.1,
            duration: 6,
            ease: "power2.inOut",
        });
        gsap.to(".loader", {
            rotate: 90,
            scale: 100,
            x: 1000,
            duration: 2,
            delay: 7,
            ease: "power2.inOut",
        });
        gsap.to(".loader,.cover-div", {
            background: "none",
            delay: 5,
            duration: 0.1,
        });

        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            gsap.to(".loader1", {
                delay: 6,
                y: -20,
                x: 35,
                duration: 0.8,
            });

            gsap.to(".loader2", {
                rotate: 90,
                y: 24,
                x: -38,
                duration: 0.8,
            }, "<");
        }
        else {
            gsap.to(".loader1", {
                delay: 6,
                x: 50,
                duration: 0.8,
            });
            gsap.to(".loader2", {
                rotate: 90,
                y: 48,
                x: -50,
                duration: 0.5,
            }, "<");
        }

        gsap.to(".loading-screen", {
            opacity: 0,
            duration: 2,
            delay: 8.2,
            display: "none",
            ease: "power1.inOut",
        });

        const vid = document.querySelector("#bigbang-video");
        vid.pause();
        vid.currentTime = 0;

        setTimeout(() => {
            vid.play();
        }, 8000);

        setTimeout(() => {
            setExit(true);
            setTimeout(() => {
                window.location.href = "/home"
            }, 3000)

        }, 12000)

        gsap.from("h1", {
            opacity: 0,
            delay: 8,
            duration: 6,
            y: 20,
            stagger: 0.2,
            ease: "power1.out",
        })
        gsap.to("h1", {
            opacity: 1,
            delay: 12,
            duration: 6,
            y: 20,
            stagger: 0.2,
            ease: "power1.out",
        })
        gsap.from("#theme", {
            opacity: 0,
            delay: 10,
            duration: 1,
            y: 10,
            stagger: 0.5,
        })
        gsap.to("#theme", {
            opacity: 1,
            delay: 16,
            duration: 1,
            y: 10,
            stagger: 0.5,
        })
    }



    return (
        <>
            <div className={`${loading ? "" : "hidden"}`}>
                <Loading />
            </div >
            <div className={`${loading ? "hidden" : "bigbang"}`}>
                <div className="bang-container">
                    <div id="bg-div" className="big-div">
                        <video preload="auto" autoPlay muted loop src="https://upcdn.io/FW25cEp/raw/BigBangVideo.mp4" className="bigbang-video" id="bigbang-video"></video>
                        <div id="overlay"></div>
                    </div>
                </div>

                <div className="loading-screen">
                    <div className="cover-div">
                        <div className="loader">
                            <div className="loader1 bar"></div>
                            <div className="loader2 bar"></div>
                        </div>
                    </div>
                    <div className="counter hidden">
                        <div className="counter1 digit hidden">
                            <div className="num">0</div>
                            <div className="num numofset1">1</div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default BigBang;