import "animate.css/animate.min.css";
import React, { useState } from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from '@material-ui/core/styles';

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 20,
    },
}))(Tooltip);

const LandingPage = () => {

    const [copiedText, setCopiedText] = useState();
    return (
        <div>
        <section className="section-padding landing-page-flex">
            {/* <ScrollAnimation animateIn="animate__fadeInLeft" className="animate__animated" animateOnce={true}> */}
                <div className="landing-page__bigheading">
                    <p className="text__bigheading landing-page-text font-accent">Hello, I’m Hiba Fatima</p>
                    <p className="text__bigheading landing-page-underline font-accent">a UI/UX enthusiast and a Web Developer</p>
                </div>
                <p className="text__content">By day I build web applications at Deloitte, by night I’m exploring the world of UI/UX</p>
                <p className="text__content">I’m passionate about designing digital products by focusing on the user’s wellbeing through good UI/UX design</p>
                <p className="text__content button-underline work-padding">View my work &rarr;</p>
            {/* </ScrollAnimation> */}
            
        </section>
        <hr/>
        </div>
    );

};

export default LandingPage;