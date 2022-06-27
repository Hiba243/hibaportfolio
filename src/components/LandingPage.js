import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const LandingPage = () => {
    return (
        <div>
            <ScrollAnimation animateIn="animate__fadeIn" className="animate__animated" animateOnce={true} duration={1.5}>
            <section className="section-padding landing-page-flex">
                    <div className="landing-page-content-flex">
                    <p className="text__bigheading font-accent">Hello, I’m Hiba Fatima, a Front-end Web Developer</p>              
                    <p className="text__content">By day I'm a web developer at Deloitte. By night I’m pursuing my interests in front-end web development.</p>
                    </div>
                <a href="#work" style={{width:"fit-content"}}><p className="text__content text-underline text-underline-pink">View My Work &rarr;</p>  </a>
            </section>
            </ScrollAnimation>
            <hr />
        </div>
    );
};

export default LandingPage;