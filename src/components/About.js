import "animate.css/animate.min.css";

const About = () => {

    return <section className="section-about section-padding" id="about">
        <div className="section-about__about">
            <div className="text__heading ">
                <span className="arr-purple">&rarr;</span> <span className="color-yellow">About Me</span>
            </div>
            <div className="section-about__about-content">
                <div className="text__content">
                    I'm Hiba Fatima, a full-stack web developer having experience building web applications for the FinTech industry.
                </div>
                <div className="text__content">
                    By day, I develop the back-end of a Tax web application at Deloitte USI where I use .NET, C#, Oracle, SQL, Azure DevOps CI/CD on the daily. 
                </div>
                <div className="text__content">
<p>By night, I like to learn new skills by building my own&nbsp;</p>
<span><a className="text__content" href="#work" rel="noreferrer" target="_self">web applications</a></span>
&nbsp;(using latest technologies like React, Node.js, and MongoDB) & by completing certifications (in&nbsp;
<span><a className="text__content" href="https://www.credly.com/badges/d8cbe7e3-ebb9-41d0-9694-d2ea8de2ddf5/public_url" rel="noreferrer" target="_blank">AWS</a></span>
&nbsp;and&nbsp; 
<span><a className="text__content" href="https://www.credly.com/badges/9aa1dfe7-0d67-4ba6-bed7-98f7c487c536/public_url" rel="noreferrer" target="_blank">UI/UX</a></span>
).
                </div>
            </div>
        </div>
        <div className="section-about__skills">
            <div className="text__heading">
                <span className="arr-purple">&rarr;</span> <span className="color-yellow">My Toolkit</span>
            </div>
            <div className="section-about__skills-content text__content">
                <div>C#</div>
                <div>.NET</div>
                <div>API</div>
                <div>Oracle</div>
                <div>SQL</div>
                <div>Azure DevOps CI/CD</div>
                <div>AWS</div>
                <div>React</div>
                <div>Javascript</div>
                <div>Node.js</div>
                <div>Git</div>
            </div>
        </div>
    </section>

}

export default About;