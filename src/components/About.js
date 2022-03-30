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
                            <p className="text__content col-flex-content">I use research, brainstorming, wireframing prototyping, storytelling, visual design to design digital products while empathizing with the user’s needs through every step of the process.</p>
                            <ul className="ul-style">
                                <li className="text__content">I use Figma to create wireframes and prototypes</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-flex">
                        <p className="text__subheading col-flex-heading">Web Development</p>
                        <div className="about-content-flex">
                            <p className="text__content col-flex-content">I have experience with full-stack web development which allows me to understand the constraints and reality of building a digital product, allowing me to design effectively and feasibly.</p>
                            <ul className="ul-style">
                                <li className="text__content">I am skilled in HTML, CSS, Sass and React</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-about__about">
                <p className="text__subheading-1 about-section-heading about-section-heading-1">My Philosophy</p>
                <div className="section-about__about-content">

                    <div className="col-flex">
                        <p className="text__subheading col-flex-heading">We should focus on the effect technology has on user’s wellbeing </p>
                        <p className="text__content col-flex-content">Digital products have great features but are being designed to overwhelm us. As a UI & UX designer my goal is to create designs that empowers the users and focuses on the wellbeing of the user.</p>
                    </div>
                    <div className="col-flex">
                        <p className="text__subheading col-flex-heading">Focusing on improving the user experience of a digital product is key for it’s success</p>
                        <p className="text__content col-flex-content">I believe that by designing products that allows users to fulfill their needs with ease, we can ensure increased customer satisfaction which leads to more users using your product instead of competing products.</p>
                    </div>
                </div>
            </div>

        </section>
        <hr />
    </div>

}

export default About;