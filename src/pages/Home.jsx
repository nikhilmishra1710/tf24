import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import EventPage from "../components/Eventpage/EventPage";
// import NewComp from './../components/NewComp';
import Footer from "../components/Footer/Footer";
import Sponsors from "./../components/Sponsors/Sponsors";
import Navbar from "./../components/Navbar/Navbar";
// import Navbar from './../components/Navbar2/Navbar/Navbar';
import NewComp from "../components/Gallery/NewComp";
import Speaker from "../components/speakers/Speaker";
import Loading from "@components/Loading/Loading";
import BigBang from "@components/BigBang/BigBang";
function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkFontLoaded();
    }, []);

    const checkFontLoaded = () => {
        document.fonts.ready.then(() => {
            setLoading(false);
        });
    };

    return (
        <>
            {loading ?
            <Loading /> :
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
