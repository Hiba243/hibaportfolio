import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const LandingPage = () => {
    return (
        <div>
            <ScrollAnimation animateIn="animate__fadeIn" className="animate__animated" animateOnce={true} duration={1.5}>
            <section className="section-padding landing-page-flex">
                <div>
                    <p className="text__bigheading font-accent">Hello, I’m Hiba Fatima</p>
                    <p className="text__bigheading landing-page-underline font-accent">a Front-end Web Developer &#38; UI/UX Designer</p>
                </div>
                
                    <p className="text__content">By day I build web applications at Deloitte, by night I’m exploring the world of UI/UX.</p>
                    <p className="text__content">I’m passionate about designing great user experiences &#38; building the front-end of digital products.</p>
                

                <a href="#work" style={{width:"fit-content"}}><p className="text__content button-underline ctabutton">View my work &darr;</p></a>
            </section>
            </ScrollAnimation>
            <hr />
        </div>
    );
};

export default LandingPage;