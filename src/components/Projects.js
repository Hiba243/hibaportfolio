import { Link } from "react-router-dom";

const Projects = () => {

    return <div>
        <section className="section-padding section-work" id="work">
            <div className="text__heading section-work__heading font-accent align-center">
                My Work
            </div>
            <div className="project">
                <div className="project__img">&nbsp;</div>
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
                            <Link to="/projects/p1"><a className="text__content text-underline">View case study &rarr;</a>   </Link>
                            <Link to="/projects/p1"><a className="text__content text-underline">View demo &rarr;</a>   </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project__img">&nbsp;</div>
                <div className="project__desc">
                    <div className="project__desc-content">
                        <div>
                            <p className="text__content">VirtualArt</p>
                        </div>
                        <p className="text__subheading">How can we have the experience of visiting a museum from our home?</p>
                        <div>
                            <p className="text__content">UI/UX design of responsive website</p>
                            <p className="text__content">Web application development using React</p>
                        </div>
                        <div className="project__link">
                            <Link to="/projects/p1"><a className="text__content text-underline">View case study &rarr;</a>   </Link>
                            <Link to="/projects/p1"><a className="text__content text-underline">View demo &rarr;</a>   </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr />
    </div>

}

export default Projects;