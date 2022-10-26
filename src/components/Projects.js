import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import EcommerceImg from '../images/Ecommerce.svg'
import WatchAndListenImg from '../images/WatchAndListen.svg';
import MetMuseumImg from '../images/MetMuseum.svg';

const Projects = () => {

    return <section className="section-padding section-work" id="work">
        <div className="text__heading section-work__heading">
            <span className="arr-purple">&rarr;</span> <span className="color-yellow">Selected Work</span>
        </div>
        <ScrollAnimation animateIn="animate__fadeInUp" className="animate__animated" animateOnce={true}>
            <div className="project">
                <img src={EcommerceImg ? EcommerceImg : ''} className='responsive-img home-img-2' alt="Ecommerce main mockup"></img>
                <div className="project__desc">
                    <div className="project__desc-content">
                        <div className="project__desc-content-heading">
                            <p className="text__subheading color-yellow">SuperSkin E-commerce Website</p>
                            <p className="text__content">Front-end and Back-end Web Development</p>
                        </div>
                        <div>
                            <p className="text__content">Created a responsive E-commerce website from scratch using React, Firebase, Express, and Stripe. Includes features to search and filter products, add items to the cart and proceed to checkout, process payments, view order history, user log in and sign up.</p>
                        </div>
                        <div>
                            <ul className="ul-style text__content">
                                <li>Built the front-end using React, used React Context API for state management, and React-router-dom for the routing.</li>
                                <li>
                                    Implemented responsive web design using HTML and CSS media queries.
                                </li>
                                <li>
                                    Integrated Stripe for payment processing, and used Express to develop a Post API to help create payment requests to Stripe.
                                </li>
                                <li>
                                    Cleaned and parsed JSON data returned from HTTP requests.
                                </li>
                                <li>
                                    Utilized Firebase realtime database for storing data, Firebase authentication to authenticate users on the sign-in/login page, and Firebase hosting to host the application.
                                </li>

                            </ul>
                        </div>
                        <div className="project__link">
                            <a className="text__content link-effect" href="https://github.com/Hiba243/skincare-shop" rel="noreferrer" target="_blank">View Code &rarr;</a>
                            <a className="text__content link-effect" href="https://clone-d6025.web.app/" rel="noreferrer" target="_blank">View Website &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
        <hr></hr>
        <ScrollAnimation animateIn="animate__fadeInUp" className="animate__animated" animateOnce={true}>
            <div className="project">
                <img src={WatchAndListenImg ? WatchAndListenImg : ''} className='responsive-img home-img-2' alt="WatchAndListen main mockup"></img>
                <div className="project__desc">
                    <div className="project__desc-content">
                        <div className="project__desc-content-heading">
                            <p className="text__subheading color-yellow">Watch and Listen Web Application</p>
                            <p className="text__content">Front-end and Back-end Web Development</p>
                        </div>
                        <div>
                            <p className="text__content">Developed a web application to allow users to create a customizable list of youtube study music videos and vision board images and watch them distraction free.</p>
                        </div>
                        <div>
                            <ul className="ul-style text__content">
                                <li>Built the front-end using React, and used React Context API for global state management of user’s data.</li>
                                <li>
                                    Integrated Youtube iframe API to embed youtube video player in the application.
                                </li>
                                <li>
                                    Developed APIs using Express to store and fetch users' data from MongoDB.

                                </li>
                                <li>
                                    Utilized JWT to secure the API calls, and used bcryptJS to hash users' passwords.

                                </li>
                                <li>
                                    Used Axios to perform HTTP requests of the API calls.
                                </li>
                                <li>
                                    Made use of Mongoose to provide schema validation and to translate between objects in code and the representation of those objects in MongoDB.

                                </li>

                            </ul>
                        </div>
                        <div className="project__link">
                            <a className="text__content link-effect" href="https://github.com/Hiba243/watch-and-listen-mern" rel="noreferrer" target="_blank">View Code &rarr;</a>
                            <a className="text__content link-effect" href="https://powerful-hollows-67614.herokuapp.com/" rel="noreferrer" target="_blank">View Website &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
        <hr></hr>
        <ScrollAnimation animateIn="animate__fadeInUp" className="animate__animated" animateOnce={true}>
            <div className="project">
                <img src={MetMuseumImg ? MetMuseumImg : ''} className='responsive-img home-img-2' alt="MetMuseum main mockup"></img>
                <div className="project__desc">
                    <div className="project__desc-content">
                        <div className="project__desc-content-heading">
                            <p className="text__subheading color-yellow">Discover Museum Website</p>
                            <p className="text__content">Front-end Web Development</p>
                        </div>
                        <div>
                            <p className="text__content">Designed and built a responsive web application for users to view the art of the Met Museum of New York.</p>
                        </div>
                        <div>
                            <ul className="ul-style text__content">
                                <li>Developed the front-end of the website using React, and used React Context API to share data between different components.</li>
                                <li>
                                    Utilized the Met Collection API for fetching the data of Metropolitan Museum.
                                </li>
                                <li>
                                    Used React Router to provide routing between pages of the application.
                                </li>
                                <li>
                                    Implemented responsive web design using HTML and CSS.
                                </li>
                            </ul>
                        </div>
                        <div className="project__link">
                            <a className="text__content link-effect" href="https://github.com/Hiba243/discover-met-museum" rel="noreferrer" target="_blank">View Code &rarr;</a>
                            <a className="text__content link-effect" href="https://discovermuseum.netlify.app/" rel="noreferrer" target="_blank">View Website &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    </section>

}

export default Projects;