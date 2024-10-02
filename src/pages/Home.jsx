import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About/About'
import EventPage from '../components/EventPage'
import NewComp from './../components/NewComp';
import Footer from '../components/Footer/Footer';
// import Hero2 from './../components/Hero2';

function Home() {
    return (
        <>
            <Hero />
            {/* <Hero2 /> */}
            <About />
            <EventPage />
            <NewComp />
            <Footer />
        </>
    )
}

export default Home