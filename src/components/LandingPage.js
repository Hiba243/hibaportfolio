import React from "react";

const LandingPage = () => {
    return (
        <div>
            <section className="section-padding landing-page-flex">
                <div>
                    <p className="text__bigheading font-accent">Hello, I’m Hiba Fatima</p>
                    <p className="text__bigheading landing-page-underline font-accent">a UI/UX Designer & Front-end Web Developer</p>
                </div>
                
                    <p className="text__content">By day I build web applications at Deloitte, by night I’m exploring the world of UI/UX</p>
                    <p className="text__content">I’m passionate about designing great user experience for digital products while caring about the impact technology has on our lives.</p>
                

                <a href="#work"><p className="text__content button-underline ctabutton">View my work &darr;</p></a>
            </section>
            <hr />
        </div>
    );
};

export default LandingPage;