import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import MuseumMockup from '../images/discovermuseum-main-mockup.svg'
import LowFiWireframe from '../images/discovermuseum-lofi-mobile.png'
import LowFiPrototype from '../images/discovermuseum-lofi-desktop.png'
import Improvement1 from '../images/discovermuseum-improvement.png'
import HighFiWireframe from '../images/discovermuseum-hifi-mobile.png'
import HighFiPrototype from '../images/discovermuseum-hifi-desktop.png'
import Solution1 from '../images/discovermuseum-solution1.png'
import Solution2 from '../images/discovermuseum-solution2.png'

export default function Project2() {
    return (
        <div>
            <Navbar />
            <div className='section-padding case-study-banner bg-brown'>
                <div className='case-study-banner-content'>
                    <p className='text__content'>DiscoverMuseum</p>
                    <p className='text__subheading'>Designing a web application for users to view the art of Metropolitan Museum </p>
                    <p className="text__content">UI/UX design and Web development of a responsive web application</p>
                    <div className='banner-logo-flex'>
                        <span className='logo-size material-icons'>watch_later</span>
                        <p className='text__content'>March 2022 - April 2022</p>
                    </div>
                    <div className='banner-logo-flex'>
                        <span className='logo-size material-icons'>account_circle</span>
                        <p className='text__content'>UI/UX Designer and Web Developer</p>
                    </div>
                    <div className='banner-btn'>
                        <a className="text__content case-study-btn btn-brown" href="https://www.figma.com/file/sDNEvslCKMhUd1FOx6ZyAw/DiscoverMuseum---Hiba?node-id=101%3A216" target="_blank" rel="noreferrer">View Design File &rarr;</a>
                        <a className="text__content case-study-btn btn-brown" href="https://discovermuseum.netlify.app/" target="_blank" rel="noreferrer">View Live Website &rarr;</a>
                    </div>
                </div>

                <img src={MuseumMockup ? MuseumMockup : ''} className='responsive-img home-img-2' alt="discovermuseum main mockup"></img>

            </div>
            <div className='section-padding'>
                <p className='text__subheading align-center'>Quick Links</p>
                <br />
                <p className='text__content align-center'><a href='#theproblem' className='underlined'>The Opportunity</a> | <a href='#understandingusers' className='underlined'> Understanding User’s Needs</a> | <a href='#ideating' className='underlined'>Ideating Solutions</a> | <a href='#startingdesign' className='underlined'>Starting The Design</a></p>
                <br />
                <p className='text__content align-center'><a href='#testingdesign' className='underlined'> Testing And Refining The Design</a> | <a href='#finaldesigns' className='underlined'>Finalizing The Design</a> | <a href='#development' className='underlined'>Developing The Web Application</a> | <a href='#conclusion' className='underlined'>Conclusion</a></p>
            </div>
            <hr />
            <div className='section-padding case-study-content' id="theproblem">
                <p className='text__content text-underline text-underline-brown' >The Opportunity</p>
                <p className='text__subheading-bold'>Many art enthusiasts would like to explore museums that are beyond their reach</p>
                <p className='text__content'>With this case study, I wanted to design a way for art enthusiasts to view the art of Metropolitan Museum of New York and enjoy the experience of a museum from the comfort of their homes.</p>
            </div>
            <hr />
            <div className='section-padding' id="understandingusers">
                <p className='text__subheading align-center'>Understanding User's Needs</p>
                <br />
                <p className='text__content align-center'><a href='#research' className='underlined'>Research</a> | <a href='#userinterview' className='underlined'> User Interviews</a> | <a href='#competetiveaudit' className='underlined'>Competetive Audit</a></p>
            </div>
            <div className='section-padding case-study-content' id="research">
                <p className='text__content text-underline text-underline-brown' >Research</p>
                <p className='text__subheading-bold'>Virtual museums can draw more visitors from around the world as location is no more a barrier.</p>
                <p className='text__content'>Upon conducting research, I found out that there are many benfits of having a virtual museum tour such as:</p>
                <ul className='text__content ul-style'>
                    <li>Easier access to information</li>
                    <li>Ability to immerse oneself in art from their home</li>
                </ul>
            </div>
            <div className='section-padding case-study-content' id="userinterview">
                <p className='text__content text-underline text-underline-brown' >User Interviews</p>
                <p className='text__subheading-bold'>Many interviewees found the idea of a virtual museum tour exciting</p>
                <div className='case-study-content-inner'>
                    <p className='text__subheading-semi-bold'>User interview questions</p>
                    <p className='text__content'>I conducted interviews to ask users if they actually found a benefit and usefulness from a virtual museum tour web application.</p>
                    <ul className='text__content ul-style'>
                        <li>What parts of visiting a museum do you like?</li>
                        <li>Would you find it useful if a web application showcased art of great museums?</li>
                    </ul>
                    <p className='text__subheading-semi-bold'>Key insights obtained from the user interviews</p>
                    <ul className='text__content ul-style'>
                        <li>The primary user groups I found were youngsters.</li>
                        <li>Users felt a virtual museum tour web application would help them avoid lines and provide a closer look at art.</li>
                        <li>Art enthusiasts wanted to view the art of great museums at one place instead of searching for individual pieces of art on the internet.</li>
                    </ul>
                </div>
            </div>
            <div className='section-padding case-study-content' id="competetiveaudit">
                <p className='text__content text-underline text-underline-brown' >Competetive Audit</p>
                <p className='text__subheading-bold'>Competing app’s offered VR experience for the virtual tour of a museum</p>
                <p className='text__content'>I analyzed popular virtual museum tour web applications and found that most of them offered VR experience, but most users found having VR experience required more effort from the user and didn't provide a smooth experience.</p>
            </div>
            <hr />
            <div className='section-padding' id="ideating">
                <p className='text__subheading align-center'>Ideating Solutions</p>
                <br />
                <p className='text__content align-center'><a href='#differentapproaches' className='underlined'>Different Approaches Considered</a> | <a href='#finalizedapproach' className='underlined'> Finalized Approach</a></p>
            </div>
            <div className='section-padding case-study-content' id="differentapproaches">
                <p className='text__content text-underline text-underline-brown' >Different Approaches Considered</p>
                <p className='text__subheading-bold'>Upon considering the other approaches, I chose a carousel layout. </p>
                <p className='text__content'>I considered two approaches: a VR experience and a carousel layout. VR does give a more immersive experience, but required more effort from the users and wasn't easy to use for many users. Also considering the fact that I will be developing the web application, building a VR application wasn't feasible for me.</p>
            </div>
            <div className='section-padding case-study-content' id="finalizedapproach">
                <p className='text__content text-underline text-underline-brown' >Finalized Approach</p>
                <p className='text__subheading-bold'>Incorporating a carousel layout for a seamless experience</p>
                <div className='case-study-content-inner'>
                    <p className='text__content'>Since carousel layouts are more familiar to users, and are easy to use, I decided to use a carousel layout for showcasing images of art pieces of the museum.</p>
                </div>
            </div>
            <hr />
            <div className='section-padding' id="startingdesign">
                <p className='text__subheading align-center'>Starting The Design</p>
            </div>
            <div className='section-padding case-study-content' id="lowfidelity">
                <p className='text__content text-underline text-underline-brown' >Low Fidelity Wireframes</p>
                <p className='text__subheading-bold'>Building low fidelity wireframes</p>
                <p className='text__content'>I started drawing up low-fidelity wireframes on Figma to finalize a layout which provides a smooth and easy to use user experience</p>
                <div className='lofiwireflex'>
                    <div className='case-study-banner-image-center'>
                        <img src={LowFiWireframe ? LowFiWireframe : ''} className="responsive-img max-width" alt="discovermuseum low fidelity wireframe 1"></img>
                    </div>
                    <div className='case-study-banner-image-center'>
                        <img src={LowFiPrototype ? LowFiPrototype : ''} className='responsive-img max-width-2' alt="discovermuseum low fidelity wireframe 2"></img>
                    </div>
                </div>
            </div>
            <hr />
            <div className='section-padding' id="testingdesign">
                <p className='text__subheading align-center'>Testing And Refining The Design</p>
                <br />
                <p className='text__content align-center'><a href='#usabilitystudy' className='underlined'>Usability Study </a> | <a href='#refiningdesign' className='underlined'> Refining Designs Based On Usability Study Findings </a></p>
            </div>
            <div className='section-padding case-study-content' id="usabilitystudy">
                <p className='text__content text-underline text-underline-brown' >Conducting Usability Study To Test My Design</p>
                <p className='text__subheading-bold'>Conducting a usability study provided useful feedback on my design</p>
                <p className='text__content'>I coducted a usability study on my low fidelity prototype to find improvement opportunties in my design. I iterated and refined my designs based on feedback from 3 peers.</p>
            </div>
            <div className='section-padding case-study-content' id="refiningdesign">
                <p className='text__content text-underline text-underline-brown' >Refining Low Fidelity Wireframes Based On Feedback</p>
                <p className='text__subheading-bold'>Iterating on my design based on feedback</p>
                <div className='imp-flex'>
                    <div className='col-flex-imp'>
                        <div className='row-flex-content-casestudy'>
                            <p className='text__subheading-semi-bold'>User's wanted to be able to zoom on each art piece for a more immersive experience</p>
                            <p className='text__content'>Since most users wanted to zoom each image of artwork, I added a zoom feature to allow users to view images which covers their device's full screen.</p>
                        </div>
                        <div className='align-center'>
                            <img src={Improvement1 ? Improvement1 : ''} className='responsive-img max-width-2' alt="discovermuseum low fidelity improvement"></img>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='section-padding' id="finaldesigns">
                <p className='text__subheading align-center'>Finalizing The Design</p>
                <br />
                <p className='text__content align-center'><a href='#highfidelity' className='underlined'>High Fidelity Mockups And Prototype</a> | <a href='#solution' className='underlined'> The Solution </a></p>
            </div>
            <div className='section-padding case-study-content' id="highfidelity">
                <p className='text__content text-underline text-underline-brown' >High Fidelity Mockups And Prototype</p>
                <p className='text__subheading-bold'>The final design</p>
                <div className='case-study-content-inner'>
                    <p className='text__content'>After modifiying the design based on user's feedback, I then created high fidelity mockups</p>
                    <p className='text__content'>I connected the screens of high fidelity mockups and added dissolve animation on each page transition for a more delicate and enjoyable user exeperience.</p>
                </div>
                <div className='banner-btn hifi-btn'>
                    <a className="text__content case-study-btn btn-brown" href="https://www.figma.com/proto/sDNEvslCKMhUd1FOx6ZyAw/DiscoverMuseum---Hiba?node-id=61%3A326&scaling=contain&page-id=61%3A315&starting-point-node-id=61%3A326&show-proto-sidebar=1" target="_blank" rel="noreferrer">View Prototype &rarr;</a>
                    <a className="text__content case-study-btn btn-brown" href="https://www.figma.com/file/sDNEvslCKMhUd1FOx6ZyAw/DiscoverMuseum---Hiba?node-id=101%3A216" target="_blank" rel="noreferrer">View Design File &rarr;</a>
                </div>
                <div className='case-study-banner-image-center section-padding'>
                    <img src={HighFiWireframe ? HighFiWireframe : ''} className='responsive-img hifi-img' alt="discovermuseum high fidelity wireframe"></img>
                </div>
                <div className='case-study-banner-image-center'>
                    <img src={HighFiPrototype ? HighFiPrototype : ''} className='responsive-img max-width-2' alt="discovermuseum high fidelity wireframe"></img>
                </div>
            </div>
            <div className='section-padding case-study-content'>
                <p className='text__content text-underline text-underline-brown' id="solution">The Solution</p>
                <p className='text__subheading-bold'>How my designs provided solutions to user’s needs</p>
                <div className='case-study-content imp-flex'>
                    <div className='row-flex'>
                        <div className='row-flex-content-casestudy col-width-half'>
                            <p className='text__subheading-small'>Provided users the ability to view art work of different departments of Metropolitan Museum of New York</p>
                        </div>
                        <div className='case-study-banner-image col-width-half'>
                            <img src={Solution1 ? Solution1 : ''} className='responsive-img imp-img' alt="discovermuseum solution 1"></img>
                        </div>
                    </div>
                    <div className='row-flex'>
                        <div className='row-flex-content-casestudy col-width-half'>
                            <p className='text__subheading-small'>Added image carousel for users to easily view all the images. Added a zoom functionality as well for providing a more immersive experience to the user</p>
                        </div>
                        <div className='case-study-banner-image col-width-half' >
                            <img src={Solution2 ? Solution2 : ''} className='responsive-img imp-img' alt="discovermuseum solution 2"></img>
                        </div>
                    </div>

                </div>
            </div>
            <hr />
            <div className='section-padding' id="development">
                <p className='text__subheading align-center'>Developing The Web Application</p>
            </div>
            <div className='section-padding case-study-content'>
                <div className='case-study-content-inner'>
                    <ul className='ul-style'>
                        <li className='text__content'>I developed the front-end of the web application using React and utilized the Met Collection API for fetching the data of Metropolitan Museum</li>
                        <li className='text__content'>I utilized React Context API to share data between different components</li>
                        <li className='text__content'>I created the image carousel using the react-gallery-carousel library</li>
                        <li className='text__content'>Using HTML, CSS and Sass I created a responsive design for the web application</li>
                        <li className='text__content'>I used React-router for connecting the pages and added CSSTransition animations on each page transition for a smoother experience</li>
                    </ul>
                </div>
                <a className="text__content case-study-btn btn-brown" href="https://discovermuseum.netlify.app/" rel="noreferrer" target="_blank">View Live Website &rarr;</a>
            </div>
            <hr />
            <div className='section-padding' id="conclusion">
                <p className='text__subheading align-center'>Conclusion</p>
            </div>
            <div className='section-padding case-study-content'>
                <p className='text__subheading-bold'>Lessons learned</p>
                <div className='case-study-content-inner'>
                    <p className='text__subheading-semi-bold'>While designing a digital product, we must consider the technical feasibility of each approach</p>
                    <p className='text__content'>Having experience in web development, I understand the necessity of design being feasible. Only if a design is feasible to develop, then only can it be built. Thus considering the technical feasibility of each element of the design is crucial before I started to build the product.</p>
                </div>
            </div>
            <hr />
            <div className='section-padding case-study-content'>
                <p className='text__subheading-bold align-center'>Thank you for reading!</p>
                <p className='text__content align-center'>If you liked my work and want to get in touch, drop me an email: hibafatima24@gmail.com</p>
            </div>

            <Footer />
        </div>

    )
}
