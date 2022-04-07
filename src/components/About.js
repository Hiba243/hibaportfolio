

const About = () => {

    return <div>
        <section className="section-about section-padding" id="about">
            <div className="text__heading about-section-heading font-accent align-center">
                About Me
            </div>
            <div className="section-about__about">
                <p className="text__subheading-1 about-section-heading about-section-heading-1">What I do</p>
                <div className="section-about__about-content">
                    <div className="col-flex">
                        <p className="text__subheading col-flex-heading">UI/UX Designing</p>
                        <div className="about-content-flex">
                            <p className="text__content col-flex-content">I use research, brainstorming, wireframing, prototyping, storytelling, and visual design to design digital products while empathizing with the user’s needs through every step of the process.</p>
                            <ul className="ul-style">
                                <li className="text__content">I use Figma to create low-fidelity and high-fidelity wireframes and prototypes</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-flex">
                        <p className="text__subheading col-flex-heading">Web Development</p>
                        <div className="about-content-flex">
                            <p className="text__content col-flex-content">I build the front-end of web applications by turning the visual designs into code using modern frameworks. I create responsive web applications and integrate animations to enhance user experience.</p>
                            <ul className="ul-style">
                                <li className="text__content">I am skilled in using HTML, CSS, Sass and React to build the front-end of web applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-about__about">
                <p className="text__subheading-1 about-section-heading about-section-heading-1">My Philosophy</p>
                <div className="section-about__about-content">

                    <div className="col-flex">
                        <p className="text__subheading col-flex-heading">We should focus on the effect technology has on user’s wellbeing</p>
                        <p className="text__content col-flex-content">Digital products have great features but are being designed to overwhelm us. As a UI/UX designer my goal is to create designs that empowers the user, and also focuses on the wellbeing of the user.</p>
                    </div>
                    <div className="col-flex">
                        <p className="text__subheading col-flex-heading">Great user experience is key to building a successful digital product</p>
                        <p className="text__content col-flex-content">I believe that creating a successful digital product is not just about having the best visual design but also about the thought and care that goes behind in making sure that the product is easy to use.</p>
                    </div>
                </div>
            </div>

        </section>
        <hr/>
    </div>

}

export default About;