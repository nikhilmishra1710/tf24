import React, { useEffect, useState, useRef } from "react";
import bb from "../../assets/videos/BigBangVideo.mp4";
import "./bigbang.css";
import Loading from "@components/Loading/Loading";

import Hero from "../Hero/Hero";
import About from "../About/About";
import EventPage from "../Eventpage/EventPage";
// import NewComp from './../NewComp';
import Footer from "../Footer/Footer";
import Sponsors from "./../Sponsors/Sponsors";
import Navbar from "./../Navbar/Navbar";
// import Navbar from './../Navbar2/Navbar/Navbar';
import NewComp from "../Gallery/NewComp";
import Speaker from "../speakers/Speaker";
// import Loading from "@components/Loading/Loading";

export default function BigBang() {
    const [loading, setLoading] = useState(true);
    const [bigBangAnimPlayed, setbigBangAnimPlayed] = useState(
         false
    );
    const [showHero, setShowHero] = useState(false);
    const [showHome, setShowHome] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        const handleLoad = () => {
            console.log("All resources are loaded.");
            setLoading(false);

            if (video) {
                // Attempt to play the video
                if (bigBangAnimPlayed) setShowHero(true)
                else {
                    video.play();
                    
                };
            }
        };



        // Add listener to ensure everything is loaded
        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current
        console.log(video, "video")
        if (video && !loading && !bigBangAnimPlayed) {
            
            if (!video.paused) return;
            else video.play()
        } else if (video && !loading && bigBangAnimPlayed && video.played.length >= 0) {
            setShowHero(true)
        }
    }, [videoRef.current])

    useEffect(()=>{
        if(setShowHero){
            console.log("setShowHero")
            setbigBangAnimPlayed(true);
            sessionStorage.setItem("BigBangAnim",true)
            setShowHome(true)
        }
    },[showHero])

    return loading ? (
        <Loading />
    ) : (
        showHome ? (
            <>

                <Navbar />
                <Hero />
                <About />
                <Sponsors />
                {/* <Speaker/> */}
                <EventPage />
                <NewComp />
                <Footer />
            </>
        ) : (
            <div className="bigbang">
                <div className="bang-container">
                    <div id="bg-div" className="big-div">
                        <video
                            ref={videoRef}
                            preload="auto"
                            muted
                            loop
                            playsInline // Important for mobile autoplay
                            src={bb}
                            className="bigbang-video"
                            id="bigbang-video"
                        ></video>
                        <div id="overlay"></div>
                    </div>
                </div>
            </div>)
    );
}
