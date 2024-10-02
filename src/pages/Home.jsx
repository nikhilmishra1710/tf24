import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import EventPage from '../components/EventPage'
import NewComp from './../components/NewComp';
// import Hero2 from './../components/Hero2';

function Home() {
    return (
        <>
            <Hero />
            {/* <Hero2 /> */}
            <About />
            <EventPage />
            <NewComp />
        </>
    )
}

export default Home