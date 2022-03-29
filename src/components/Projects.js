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
                        <p className="project__desc-content-h1 text__subheading">Designing an easier way for users to find food they want to order from the vast amount of options present in a food ordering app</p>
                        <div className="text__content">
                            <p className="project__desc-content-feat text__content">UI/UX design of a mobile app</p>
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
                        <p className="project__desc-content-h1 text__subheading">Virtual Tour of Meteropolitan Museum</p>
                        <div className="text__content">
                            <p className="project__desc-content-feat text__content">UI/UX design and web development of a responsive web app</p>
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