import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./hero.css";
import soundFile from "../../assets/sound.mp3";
import backgroundVideo from "../../assets/video.mp4";
import icon from "../../assets/icon.jpg";

function Hero2() {
    const [soundActive, setSoundActive] = useState(false);
    const [showToggleDiv, setShowToggleDiv] = useState(true);
    const [currentTime, setCurrentTime] = useState("");
    const audioRef = useRef(null);

    const containerVariants = {
        hidden: { scale: 1.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1 },
        },
    };

    const slideInLeft = {
        hidden: { x: "-100vw", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "tween", duration: 0.6, delay: 0.2 },
        },
    };

    const slideInTop = {
        hidden: { y: "-100vh", opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "tween", duration: 0.6, delay: 0.2 },
        },
    };

    const slideInRight = {
        hidden: { x: "100vw", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "tween", duration: 0.6, delay: 0.2 },
        },
    };

    const handleSoundToggle = () => {
        setSoundActive((prevState) => {
            const newSoundState = !prevState;
            if (newSoundState) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }

            localStorage.setItem("soundActive", JSON.stringify(newSoundState));

            return newSoundState;
        });

        setShowToggleDiv(false);
        setTimeout(() => {
            setShowToggleDiv(true);
        }, 400);
    };

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio(soundFile);
        }

        if (soundActive) {
            audioRef.current.play();
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
            localStorage.removeItem("soundActive");
        };
    }, [soundActive]);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const seconds = now.getSeconds().toString().padStart(2, "0");
            setCurrentTime(`[ TIME : ${hours} : ${minutes} ]`);
        };

        const interval = setInterval(updateTime, 1000);
        updateTime();

        return () => clearInterval(interval);
    }, []);

    const notchVariants = {
        hidden: { y: 0, opacity: 1 },
        exit: { y: -50, opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
        enter: { y: "-100vh", opacity: 0, transition: { duration: 0.1, ease: "easeInOut" } },
        visible: { y: 0, opacity: 1, transition: { duration: 0.1, ease: "easeInOut" } },
    };

    return (
        <>
            <motion.div className="hero-container pb-8" variants={containerVariants} initial="hidden" animate="visible">
                <div className="hazy"></div>
                <div className="line"></div>
                <div className="tint"></div>

                <div className="main">
                    <div className="content">
                        <video autoPlay muted loop className="background-video">
                            <source src={backgroundVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <motion.div className="data-left" variants={slideInLeft} initial="hidden" animate="visible">
                            <div className="time">
                                <div>{currentTime}</div>
                            </div>
                            <div className="title">
                                <h1>TANTRAFIESTA 24</h1>
                            </div>
                            <div className="loaders">
                                <div className="loader1"></div>
                                <div className="loader2"></div>
                                <div className="loader3"></div>
                                <div className="loader4"></div>
                                <div className="loader5"></div>
                            </div>
                            <div className="desc">
                                <p className="desc-data">DIGITAL BIG BANG</p>
                                <p className="desc-data">UNCHARTED REALMS</p>
                                <p className="desc-data">AWAIT</p>
                            </div>
                        </motion.div>

                        <motion.div className="data-right" variants={slideInRight} initial="hidden" animate="visible">
                            <div className="card">
                                <div className="sub-card">
                                    <div className="h-auto">
                                        <p className="card-data">hello this is card</p>
                                    </div>
                                    <div className="h-auto">
                                        <p className="card-data">hello this is card</p>
                                    </div>
                                    <div>
                                        <p className="card-data">hello this is card</p>
                                    </div>
                                </div>
                                <div className="corner bottom-left"></div>
                                <div className="corner top-right"></div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div className="data-notch" variants={slideInTop} initial="hidden" animate="visible">
                        <div className="data-notch-wrapper">
                            <AnimatePresence mode="wait">
                                {showToggleDiv && (
                                    <motion.div
                                        key={soundActive ? "deactivate" : "activate"}
                                        className={`top-notch ${soundActive ? "sound-on" : ""}`}
                                        onClick={handleSoundToggle}
                                        variants={notchVariants}
                                        initial="enter"
                                        animate="visible"
                                        exit="exit"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <p>{soundActive ? "[ DEACTIVATE SOUND ]" : "[ ACTIVATE SOUND ]"}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div className="notch right-notch">
                                <p>Right Notch</p>
                            </div>
                            <div className="notch left-notch">
                                <p>Left Notch</p>
                            </div>
                            <div className="notch bottom-notch">
                                <p>SYSTEM: LOADING</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}

export default Hero2;
