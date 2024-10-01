import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import EventPage from '../components/EventPage'
import NewComp from './../components/NewComp';

function Home() {
    return (
        <>
            <Hero />
            <About />
            <EventPage />
            <NewComp />
        </>
    )
}

export default Home