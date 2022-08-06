

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
                        <p className="text__content col-flex-content">Being able to build websites and web applications as well as bringing ideas to life on the browser was something that always intrigued me.</p>
                            <p className="text__content col-flex-content">I have experience building web applications in the FinTech industry.</p>
                            <ul className="ul-style">
                                <li className="text__content">I am skilled in Front-End (JavaScript, React, HTML, CSS, SASS) and Back-End(C#, ASP.NET, Express, Node.js) Web Development, writing Oracle queries and working with Azure DevOps CI/CD.</li>
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