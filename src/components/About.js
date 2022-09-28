import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {

    return <section className="section-about section-padding" id="about">
        <div className="section-about__about">
            {/* <ScrollAnimation animateIn="animate__fadeInLeft" className="animate__animated" animateOnce={true}> */}
            <div className="text__heading ">
                <span className="arr-purple">&rarr;</span> <span className="color-yellow">About Me</span>
            </div>
            {/* </ScrollAnimation> */}
            <div className="section-about__about-content">
                <div className="text__content">
                    I am currently building web applications for the FinTech industry.
                </div>
                <div className="text__content">
                    I am skilled in Front-end web development, Back-end web development, writing Oracle SQL queries and doing deployments through Azure DevOps CI/CD.
                </div>
                <div className="text__content">
                    In my spare time I learn about the latest technologies in web development and build my own web applications using it.
                </div>
            </div>
        </div>
        <div className="section-about__skills">

            {/* <ScrollAnimation animateIn="animate__fadeInLeft" className="animate__animated" animateOnce={true}> */}
            <div className="text__heading">
                <span className="arr-purple">&rarr;</span> <span className="color-yellow">My Toolkit</span>
            </div>
            {/* </ScrollAnimation> */}
            <div className="section-about__skills-content text__content">
                <div>Javascript</div>
                <div>React</div>
                <div>HTML</div>
                <div>SASS</div>
                <div>C#</div>
                <div>.NET</div>
                <div>Node.js</div>
                <div>Oracle</div>
                <div>SQL</div>
                <div>Azure DevOps CI/CD</div>
                <div>Git</div>
            </div>
        </div>
    </section>

}

export default About;