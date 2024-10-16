import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import EventPage from "../components/Eventpage/EventPage";
import Footer from "../components/Footer/Footer";
import Sponsors from "./../components/Sponsors/Sponsors";
import Navbar from "./../components/Navbar/Navbar";
import NewComp from "../components/Gallery/NewComp";
import Speaker from "../components/speakers/Speaker";
import BigBang from "@components/BigBang/BigBang";

function Home() {
    const [bigBang, setBigBang] = useState(false)

    return (
        <>
            {
                bigBang === false ?
                    <BigBang setBigBang={setBigBang} />
                    :
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
            }

        </>
    );
}

export default Home;
