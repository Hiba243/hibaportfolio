import React from 'react'
import Navbar from "./Navbar"
import LandingPage from "./LandingPage"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
import Footer from './Footer'

const Home = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <LandingPage/>
            <Projects/>
            <About/>
            <Contact/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;
