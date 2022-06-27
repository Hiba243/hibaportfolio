

const About = () => {

    return <div>
        <section className="section-about section-padding" id="about">
            <div className="text__heading about-section-heading font-accent align-center">
                About Me
            </div>
            <div className="section-about__about">
                <div className="section-about__about-content">
                <div className="col-flex">
                        <div className="about-content-flex">
                        <p className="text__content col-flex-content">Being able to build websites and web applications as well as bringing ideas to life on the browser was something that always intrigued me. So I got a degree in computer science engineering to learn how to build things for the web.</p>
                            <p className="text__content col-flex-content">I build the front-end of web applications by turning the visual designs into code using modern frameworks.</p>
                            <ul className="ul-style">
                                <li className="text__content">I am skilled in using HTML, CSS, Sass, Javascript, jQuery and React to build the front-end of web applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr/>
    </div>

}

export default About;