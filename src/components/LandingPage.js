import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <section className="section-padding landing-page-flex">
                <div>
                    <p className="text__bigheading font-accent">Hello, I’m Hiba Fatima</p>
                    <p className="text__bigheading landing-page-underline font-accent">a UI/UX enthusiast and a Web Developer</p>
                </div>
                <div>
                    <p className="text__content">By day I build web applications at Deloitte, by night I’m exploring the world of UI/UX</p>
                    <p className="text__content">I’m passionate about designing digital products by focusing on the user’s wellbeing through good UI/UX design</p>
                </div>

                <a href="#work"><p className="text__content button-underline ctabutton">View my work &darr;</p></a>
            </section>
            <hr />
        </div>
    );
};

export default LandingPage;