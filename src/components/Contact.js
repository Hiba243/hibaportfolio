import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from '@material-ui/core/styles';
import React, { useState } from "react";

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 20,
    },
}))(Tooltip);

const Contact = () => {

    const [copiedText, setCopiedText] = useState();

    return <section className="section-contact section-padding" id="contact">
        <div className="section-contact__content">
            {/* <ScrollAnimation animateIn="animate__fadeInLeft" className="animate__animated" animateOnce={true}> */}
                <p className="text__heading font-accent text-underline-pink">Get In Touch</p>
            {/* </ScrollAnimation> */}
            <div className="contactFlex">
            <p className="text__subheading-1 contact-align-center">
                Want to work together?</p>
            <div>
            <p className="text__subheading contact-align-center">
               Drop me an email</p>
                
                <CopyToClipboard
                    text={"hibafatima24@gmail.com"}
                    onCopy={() => setCopiedText("hibafatima24@gmail.com")}
                >
                    <LightTooltip
                        title={
                            copiedText === "hibafatima24@gmail.com"
                                ? "✔ Copied to clipboard"
                                : "Click to copy"
                        }
                        placement="top"
                        onClose={() => setCopiedText("")}
                    >
                        <p className="copy-click text__subheading contact-align-center">hibafatima24@gmail.com</p>
                    </LightTooltip>
                </CopyToClipboard>     
                </div>    
            </div>
        </div>
    </section>
    
}

export default Contact;