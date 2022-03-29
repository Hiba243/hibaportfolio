import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {

    return <div><section className="section-about section-padding" id="about">
        <div className="text__heading about-section-heading font-accent">
            About Me
        </div>
        <div className="section-about__about">
            <p className="text__subheading-1 about-section-heading about-section-heading-1">What I do</p>
            <div className="section-about__about-content">

                <div className="col-flex">
                    <p className="text__subheading col-flex-heading">UI/UX Designing</p>
                    <p className="text__content col-flex-content">I use research, brainstorming, wireframing prototyping, storytelling, visual design to design digital products while empathizing with the user’s needs through every step of the process.</p>
                </div>
                <div className="col-flex">
                    <p className="text__subheading col-flex-heading">Web Development</p>
                    <p className="text__content col-flex-content">I have experience with full-stack web development which allows me to understand the constraints and reality of building a digital product, allowing me to design effectively and feasibly.</p>
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
                    <p className="text__subheading col-flex-heading">Empathizing with user’s problems is vital for designing a successful digital product</p>
                    <p className="text__content col-flex-content">A digital product will be successfull when the user is able to use the product easily without any obstacles. This can be achieved by empathizing with the user’s needs and frustrations and designing a product which addresses those needs and by minimizing any pain points.</p>
                </div>
            </div>
        </div>
        
    </section>
    <hr/></div>

}

export default About;