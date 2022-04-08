import { Link } from "react-router-dom";
import HeroImg from '../images/cravefood-main-mockup.svg'
import MuseumMockup from '../images/discovermuseum-main-mockup.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Projects = () => {

    return <div>
        
        <section className="section-padding section-work" id="work">
            <div className="text__heading section-work__heading font-accent align-center">
                My Work
            </div>
            <ScrollAnimation animateIn="animate__fadeInUp" className="animate__animated" animateOnce={true}>
            <div className="project bg-yellow">
                <div className="project__img"><img src={HeroImg ? HeroImg : ''} className='responsive-img home-img-1' alt="cravefood main mockup"></img></div>
                <div className="project__desc">
                    <div className="project__desc-content">
                        <div>
                            <p className="text__content">CraveFood</p>
                        </div>
                        <p className="text__subheading">How do we decide what to order in a food ordering app when we have so many options to choose from?</p>
                        <div>
                            <p className="text__content">UI/UX design of mobile app</p>
                        </div>
                        <div className="project__link">
                            <Link to="/casestudy01"><p className="text__content text-underline text-underline-yellow">View Case Study &rarr;</p>   </Link>
                            <a className="text__content text-underline text-underline-yellow" href="https://www.figma.com/proto/GE3ZC1BWbiWABLVG1XQXGw/CraveFood-Design-File---Hiba?node-id=252%3A1983&scaling=scale-down&page-id=252%3A1982&starting-point-node-id=252%3A1983" rel="noreferrer" target="_blank">View Prototype &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp" className="animate__animated" animateOnce={true}>
            <div className="project bg-brown">
            <img src={MuseumMockup ? MuseumMockup : ''} className='responsive-img home-img-2' alt="discovermuseum main mockup"></img>
                <div className="project__desc">
                    <div className="project__desc-content">
                        <div>
                            <p className="text__content">DiscoverMuseum</p>
                        </div>
                        <p className="text__subheading">How can we have the experience of visiting a museum from our home?</p>
                        <div>
                            <p className="text__content">UI/UX design of responsive website</p>
                            <p className="text__content">Web application development</p>
                        </div>
                        <div className="project__link">
                            <Link to="/casestudy02"><p className="text__content text-underline text-underline-brown">View Case Study &rarr;</p>   </Link>
                            <a href="https://discovermuseum.netlify.app/" target="_blank" rel="noreferrer"><p className="text__content text-underline text-underline-brown">View Website &rarr;</p>   </a>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollAnimation>
        </section>
        <hr/>
    </div>

}

export default Projects;