import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import EventPage from '../components/Eventpage/EventPage'
import NewComp from './../components/NewComp';
import Footer from '../components/Footer/Footer';
import Sponsors from './../components/Sponsors/Sponsors';
import Navbar from './../components/Navbar/Navbar';
// import Navbar from './../components/Navbar2/Navbar/Navbar';

function Home() {
    return (
        <>
            {/* <Navbar /> */}
            <Navbar/>
            <Hero />
            <About />
            <Sponsors />
            <EventPage />
            <NewComp />
            <Footer />
        </>
    )
}

export default Home