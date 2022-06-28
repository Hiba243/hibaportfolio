import { Link } from "react-router-dom";
import EcommerceImg from '../images/Ecommerce.svg'
import WatchAndListenImg from '../images/WatchAndListen.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Projects = () => {

    return <div>

        <section className="section-padding section-work" id="work">
            <div className="text__heading section-work__heading font-accent align-center">
                My Work
            </div>
            <ScrollAnimation animateIn="animate__fadeInUp" className="animate__animated" animateOnce={true}>
                <div className="project bg-red">
                <img src={EcommerceImg ? EcommerceImg : ''} className='responsive-img home-img-2' alt="Ecommerce main mockup"></img>
                    <div className="project__desc">
                        <div className="project__desc-content">
                            <div className="project__desc-content-heading">
                                <p className="text__subheading">SuperSkin E-commerce Website</p>
                                <p className="text__content">Front-end and Back-end Web Development</p>
                            </div>
                            <div>
                                <p className="text__content">Created a responsive E-commerce website from scratch using React, Firebase, Express and Stripe. Includes features to search and filter for products, add items to cart and proceed to checkout, process payments, view order history, user login and sign up.</p>
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
                                        Utilized Firebase realtime database for storing data, Firebase authentication to authenticate users in sign-in/login page, and Firebase hosting to host the application.
                                    </li>

                                </ul>
                            </div>
                            <div className="project__link">
                            <a className="text__content text-underline text-underline-red" href="https://github.com/Hiba243/skincare-shop" rel="noreferrer" target="_blank">View Code &rarr;</a>
                                <a className="text__content text-underline text-underline-red" href="https://clone-d6025.web.app/" rel="noreferrer" target="_blank">View Website &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp" className="animate__animated" animateOnce={true}>
                <div className="project bg-grey">
                   <img src={WatchAndListenImg ? WatchAndListenImg : ''} className='responsive-img home-img-2' alt="Ecommerce main mockup"></img>
                    <div className="project__desc">
                        <div className="project__desc-content">
                            <div className="project__desc-content-heading">
                                <p className="text__subheading">Watch and Listen Web Application</p>
                                <p className="text__content">Front-end and Back-end Web Development</p>
                            </div>
                            <div>
                                <p className="text__content">Created a web application to allow users to create their own customized list of youtube videos and images to watch them distraction free.</p>
                            </div>
                            <div>
                                <ul className="ul-style text__content">
                                    <li>Built the front-end using React, and used React Context API for global state management of user’s data.</li>
                                    <li>
                                    Integrated Youtube iframe API to embed youtube video player in the application. 
                                    </li>
                                    <li>
                                    Developed APIs using Node.js Express to store and fetch user's data from MongoDB.

                                    </li>
                                    <li>
                                    Utilized JWT to secure the API calls, and used bcryptJS to hash user's passwords.

                                    </li>
                                    <li>
                                    Used axios to perform http requests of the API calls.

                                    </li>
                                    <li>
                                    Made use of Mongoose to provide schema validation and to translate between objects in code and the representation of those objects in MongoDB.

                                    </li>

                                </ul>
                            </div>
                            <div className="project__link">
                            <a className="text__content text-underline text-underline-grey" href="https://github.com/Hiba243/watch-and-listen-mern" rel="noreferrer" target="_blank">View Code &rarr;</a>
                                <a className="text__content text-underline text-underline-grey" href="https://powerful-hollows-67614.herokuapp.com/" rel="noreferrer" target="_blank">View Website &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </section>
        <hr />
    </div>

}

export default Projects;