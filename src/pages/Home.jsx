import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About/About'
import EventPage from '../components/Eventpage/EventPage'
import NewComp from './../components/NewComp';
import Footer from '../components/Footer/Footer';
import Sponsors from './../components/Sponsors/Sponsors';

function Home() {
    return (
        <>
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