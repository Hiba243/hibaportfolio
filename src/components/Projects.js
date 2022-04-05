import { Link } from "react-router-dom";
import HeroImg from '../images/case-study-01-banner-img.png'
import MuseumMockup from '../images/museummockup.png';
const Projects = () => {

    return <div>
        <section className="section-padding section-work" id="work">
            <div className="text__heading section-work__heading font-accent align-center">
                My Work
            </div>
            <div className="project bg-yellow">
                <div className="project__img"><img src={HeroImg ? HeroImg : ''} className='responsive-img home-img-1' alt="home-pg"></img></div>
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
                            <Link to="/casestudy01"><p className="text__content text-underline text-underline-yellow">View case study &rarr;</p>   </Link>
                            <a className="text__content text-underline text-underline-yellow" href="https://www.figma.com/proto/GE3ZC1BWbiWABLVG1XQXGw/CraveFood-Design-File---Hiba?node-id=252%3A1983&scaling=scale-down&page-id=252%3A1982&starting-point-node-id=252%3A1983" target="_blank">View Prototype &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project bg-brown">
            <img src={MuseumMockup ? MuseumMockup : ''} className='responsive-img home-img-2' alt="home-pg"></img>
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
                            <Link to="/casestudy02"><p className="text__content text-underline text-underline-brown">View case study &rarr;</p>   </Link>
                            <a href="https://www.figma.com/proto/sDNEvslCKMhUd1FOx6ZyAw/DiscoverMuseum---Hiba?node-id=61%3A326&scaling=contain&page-id=61%3A315&starting-point-node-id=61%3A326&show-proto-sidebar=1"><p className="text__content text-underline text-underline-brown">View demo &rarr;</p>   </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr/>
    </div>

}

export default Projects;