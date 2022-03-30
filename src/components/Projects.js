import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = () => {

    return <div><section className="section-padding section-work" id="work">
        <div className="text__heading section-work__heading font-accent">
            My Work
        </div>
        <section>
            <div className="project">
                <div className="project__img">&nbsp;</div>
                <div className="project__desc">
                    <div className="project__desc-content">
                        <div className="text__content">
                            <p className="project__desc-content-feat text__content">CraveFood</p>
                        </div>
                        <p className="project__desc-content-h1 text__subheading">How do we decide what to order in a food ordering app when we have so many options to choose from?</p>
                        <div className="text__content">
                            <p className="project__desc-content-feat text__content">UI/UX design of mobile app</p>
                        </div>
                        <div className="project__link">
                            <Link to="/projects/p1"><a className="text__content text-underline">View case study &rarr;</a>   </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="project">
                <div className="project__img">&nbsp;</div>
                <div className="project__desc">
                    <div className="project__desc-content">
                        <div className="text__content">
                            <p className="project__desc-content-feat text__content">VirtualArt</p>
                        </div>
                        <p className="project__desc-content-h1 text__subheading">How can we have the experience of visiting a museum from our home?</p>
                        <div className="text__content">
                            <p className="project__desc-content-feat text__content">UI/UX design of responsive website</p>
                            <p className="project__desc-content-feat text__content">Web application development using React</p>
                        </div>
                        <div className="project__link">
                            <Link to="/projects/p1"><a className="text__content text-underline">View case study &rarr;</a>   </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <hr/>
    </div>

}

export default Projects;