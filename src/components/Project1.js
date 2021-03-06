import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import HeroImg from '../images/cravefood-main-mockup.svg'
import Persona from '../images/cravefood-persona.png'
import Journey from '../images/cravefood-user-journey-map.png'
import Affinity from '../images/cravefood-affinity-diagram.png'
import Competetive from '../images/cravefood-competetive-products.png'
import UserFlow from '../images/cravefood-userflow.png'
import LowFiWireframe from '../images/cravefood-lofi-wireframe.png'
import LowFiPrototype from '../images/cravefood-lofi-prototype.png'
import Improvement1 from '../images/cravefood-improvement1.png'
import Improvement2 from '../images/cravefood-improvement2.png'
import Improvement3 from '../images/cravefood-improvement3.png'
import HighFiWireframe from '../images/cravefood-hifi-mockups.svg'
import HighFiPrototype from '../images/cravefood-hifi-prototype.png'
import Sticker from '../images/cravefood-sticker-sheet.png'
import Solution1 from '../images/cravefood-filter-step1.png'
import Solution2 from '../images/cravefood-filter-step2.png'
import Solution3 from '../images/cravefood-food-description.png'
import Solution4 from '../images/cravefood-homepage.png'
import Solution5 from '../images/cravefood-cart.png'

export default function Project1() {
    return (
        <div>
            <Navbar />
            <div className='section-padding case-study-banner bg-yellow'>
                <div className='case-study-banner-content'>
                    <p className='text__content'>CraveFood</p>
                    <p className='text__subheading'>Designing an easier way for users to decide what food to order in a food ordering app</p>
                    <p className='text__content'>UI/UX design for a mobile app</p>
                    <div className='banner-logo-flex'>
                        <span className='logo-size material-icons'>watch_later</span>
                        <p className='text__content'>January 2022 - April 2022</p>
                    </div>
                    <div className='banner-logo-flex'>
                        <span className='logo-size material-icons'>account_circle</span>
                        <p className='text__content'>UI/UX Designer</p>
                    </div>
                    <div className='banner-btn'>
                    <a className="text__content case-study-btn" href="https://www.figma.com/proto/GE3ZC1BWbiWABLVG1XQXGw/CraveFood-Design-File---Hiba?node-id=252%3A1983&scaling=scale-down&page-id=252%3A1982&starting-point-node-id=252%3A1983" target="_blank" rel="noreferrer">View Prototype &rarr;</a>
                    <a className="text__content case-study-btn" href="https://www.figma.com/file/GE3ZC1BWbiWABLVG1XQXGw/CraveFood-Design-File---Hiba?node-id=331%3A787" target="_blank" rel="noreferrer">View Design File &rarr;</a>
                    </div>
                </div>
                <div className='case-study-banner-image-center'>
                    <img src={HeroImg ? HeroImg : ''} className='responsive-img' alt="cravefood main mockup"></img>
                </div>
            </div>
            <div className='section-padding'>
                <p className='text__subheading align-center'>Quick Links</p>
                <br />
                <p className='text__content align-center'><a href='#theproblem' className='underlined'>The Problem</a> | <a href='#understandingusers' className='underlined'> Understanding User???s Needs And Frustrations</a> | <a href='#ideating' className='underlined'>Ideating Solutions</a></p>
                <br />
                <p className='text__content align-center'><a href='#startingdesign' className='underlined'>Starting The Design</a> | <a href='#testingdesign' className='underlined'> Testing And Refining The Design</a> | <a href='#finaldesigns' className='underlined'>Finalizing The Design</a> | <a href='#conclusion' className='underlined'>Conclusion</a></p>
            </div>
            <hr />
            <div className='section-padding case-study-content' id="theproblem">
                <p className='text__content text-underline text-underline-yellow' >The Problem</p>
                <p className='text__subheading-bold'>We get more confused as we keep scrolling through endless options</p>
                <p className='text__content'>With this case study, I wanted to explore the reason why we face difficulty while deciding what to order in food ordering apps and design a solution for it.</p>
            </div>
            <hr />
            <div className='section-padding' id="understandingusers">
                <p className='text__subheading align-center'>Understanding User's Needs And Frustrations</p>
                <br />
                <p className='text__content align-center'><a href='#research' className='underlined'>Research</a> | <a href='#userinterview' className='underlined'> User Interviews</a> | <a href='#competetiveaudit' className='underlined'>Competetive Audit</a></p>
            </div>
            <div className='section-padding case-study-content' id="research">
                <p className='text__content text-underline text-underline-yellow' >Research</p>
                <p className='text__subheading-bold'>Too many choices has shown to have negative effects on decision making ability</p>
                <p className='text__content'>I began to draw from research articles on the effect of too many choices, where I learned that: </p>
                <div className='div-align-center'>
                    <p className='text__content align-center width-half'>???Choice overload leads users to become frustrated, less likely to choose, and less satisfied with their selection???</p>
                </div>
            </div>
            <div className='section-padding case-study-content' id="userinterview">
                <p className='text__content text-underline text-underline-yellow' >User Interviews</p>
                <p className='text__subheading-bold'>My interviewees main need to use food ordering app is to find food that will fulfill their craving</p>
                <div className='case-study-content-inner'>
                    <p className='text__subheading-semi-bold'>User interview questions</p>
                    <p className='text__content'>I conducted interviews to further understand why users face difficulty while deciding what food to order.</p>
                    <ul className='text__content ul-style'>
                        <li>How do you decide what food you want to order?</li>
                        <li>What is your motivation to use food ordering apps?</li>
                        <li>What parts of a food ordering app do you think can be improved?</li>
                    </ul>
                    <p className='text__subheading-semi-bold'>Key insights obtained from the user interviews</p>
                    <ul className='text__content ul-style'>
                        <li>The primary user groups I found were youngsters and adults.</li>
                        <li>Users use food ordering app to find a food that will fulfifll their cravings.</li>
                        <li>Users spend a significant amount of time trying to find a food item they???ll like.</li>
                        <li>Users often feel overloaded with all the options and information heavy UI.</li>
                    </ul>
                    <p className='text__subheading-semi-bold'>Persona of a user using food ordering app</p>
                    <p className='text__content'>I created personas to represent the primary user group of food ordering apps.</p>
                    <div className='case-study-banner-image-center'>
                        <img src={Persona ? Persona : ''} className='responsive-img width-50-img' alt="cravefood persona"></img>
                    </div>
                    <p className='text__subheading-semi-bold'>User journey map</p>
                    <p className='text__content'>I mapped out user's journey on a food ordering app to identify at which steps users face difficulties.</p>
                    <div className='case-study-banner-image-center'>
                        <img src={Journey ? Journey : ''} className='responsive-img width-80-img' alt="cravefood user journey map"></img>
                    </div>
                    <p className='text__subheading-semi-bold'>Affinity diagram</p>
                    <p className='text__content'>I summarized the findings from user interviews into an affinity diagram as well.</p>
                    <div className='case-study-banner-image-center'>
                        <img src={Affinity ? Affinity : ''} className='responsive-img' alt="cravefood affinity diagram"></img>
                    </div>
                </div>
            </div>
            <div className='section-padding case-study-content' id="competetiveaudit">
                <p className='text__content text-underline text-underline-yellow' >Competetive Audit</p>
                <p className='text__subheading-bold'>Food ordering apps offer lots of options, but miss the mark on fulfilling user's actual needs</p>
                <p className='text__content'>I analyzed popular food ordering apps and found that most of them presented an overload of choice to the users. But the main reason why users use food ordering apps is to find something that will fullfill their craving. The only thing popular food ordering apps offered to help users to find food more easily was a traditional filter button, which wasn???t doing much help. Improving the filter functionality became my opportunity for the solution.</p>
                <div className='case-study-banner-image-center'>
                    <img src={Competetive ? Competetive : ''} className='competetive-img' alt="cravefood's competetive products"></img>
                </div>
            </div>
            <hr />
            <div className='section-padding' id="ideating">
                <p className='text__subheading align-center'>Ideating Solutions</p>
                <br />
                <p className='text__content align-center'><a href='#differentapproaches' className='underlined'>Different Approaches Considered </a> | <a href='#finalizedapproach' className='underlined'> Finalized Approach</a></p>
            </div>
            <div className='section-padding case-study-content' id="differentapproaches">
                <p className='text__content text-underline text-underline-yellow' >Different Approaches Considered</p>
                <p className='text__subheading-bold'>Upon considering the effects of other approaches, I stuck to my idea of a custom two step filter. </p>
                <p className='text__content'>I spent several days trying to explore different approaches: displaying food by categories and a two step filter. However upon thinking about the effect of displaying food by categories, I thought it could still potentially cause confusion to the user as to which category they should explore and it may end up in the user exploring all the categories and becoming overwhelmed. Thus I chose to stick with the custom two step filter.</p>
            </div>
            <div className='section-padding case-study-content' id="finalizedapproach">
                <p className='text__content text-underline text-underline-yellow' >Finalized Approach</p>
                <p className='text__subheading-bold'>Creating a two step filter that strives to fulfifll user's actual needs</p>
                <div className='case-study-content-inner'>
                    <p className='text__subheading-semi-bold'>Allowing the users to filter food based on their craving</p>
                    <ul className='text__content ul-style'>
                        <li>When asked what they would like to order, user's often described what they want their food to be like.</li>
                        <li>But when users open a food ordering app, they are presented with a lot of amazing options to choose from, and that often makes them forget their initial search criteria</li>
                        <li>So before the user goes down the rabbit hole of endless scrolling, we should ask the user ???What type of food are you looking for???? as this can help the user remember their initial search criteria.</li>
                        <li>Traditional filters usually display all the filter criterias at one place to the use</li>
                        <li>But to avoid overwhelming the user, I thought of using a two step filter. Instead of viewing all the filter criterias at once, a two step filter helps the user to only filter based on criterias that are important to them at the given moment.</li>
                    </ul>
                </div>
                <div className='case-study-content-inner'>
                    <p className='text__subheading-semi-bold'>Including image and tags for each food item to further improve the decision making process of the user</p>
                    <ul className='text__content ul-style'>
                        <li>The name and description of a food item are often not enough for a user to make a firm decision of whether they want to order a particular food item</li>
                        <li>Including image and tags for each food item can help users to make a firm decision and improve their decision making process</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='section-padding' id="startingdesign">
                <p className='text__subheading align-center'>Starting The Design</p>
                <br />
                <p className='text__content align-center'><a href='#userflow' className='underlined'>User Flow Of My Solution</a> | <a href='#lowfidelity' className='underlined'> Low Fidelity Wireframe And Prototype </a></p>
            </div>
            <div className='section-padding case-study-content' id="userflow">
                <p className='text__content text-underline text-underline-yellow' >User Flow of My Solution</p>
                <p className='text__subheading-bold'>Constructing the user flow of my solution</p>
                <p className='text__content'>I constructed a user flow of a basic start to finish journey of ordering a food on a food ordering app and also incorporated my key solution i.e. a two step filter</p>
                <div className='case-study-banner-image-center'>
                    <img src={UserFlow ? UserFlow : ''} className='responsive-img' alt="cravefood userflow"></img>
                </div>
            </div>
            <div className='section-padding case-study-content' id="lowfidelity">
                <p className='text__content text-underline text-underline-yellow' >Low Fidelity Wireframes and Prototype</p>
                <p className='text__subheading-bold'>I built low-fidelity wireframes to finalize an app layout in alignment with my solution</p>
                <p className='text__content'>I started drawing up low-fidelity wireframes on figma to finalize the layout of each screen before moving to visuals details such as colors and fonts. I then connected the screens to create a working low-fidelity prototype.</p>
                <div className='lofiwireflex'>
                    <div className='case-study-banner-image-center'>
                        <img src={LowFiWireframe ? LowFiWireframe : ''} className='responsive-img width-80-img' alt="cravefood low fidelity wireframes"></img>
                    </div>
                    <div className='case-study-banner-image-center'>
                        <img src={LowFiPrototype ? LowFiPrototype : ''} className='responsive-img' alt="cravefood low fidelity prototype"></img>
                    </div>
                </div>
            </div>
            <hr />
            <div className='section-padding' id="testingdesign">
                <p className='text__subheading align-center'>Testing And Refining The Design</p>
                <br />
                <p className='text__content align-center'><a href='#usabilitystudy' className='underlined'>Usability Study</a> | <a href='#refiningdesign' className='underlined'> Refining Designs Based On Usability Study Findings </a></p>
            </div>
            <div className='section-padding case-study-content' id="usabilitystudy">
                <p className='text__content text-underline text-underline-yellow' >Conducting Usability Study To Test My Design</p>
                <p className='text__subheading-bold'>Conducting a usability study provided useful feedback on my design</p>
                <p className='text__content'>I coducted a usability study on my low fidelity prototype to find improvement opportunties in my design. I iterated and refined my designs based on feedback from 3 users and 2 peers.</p>
            </div>
            <div className='section-padding case-study-content' id="refiningdesign">
                <p className='text__content text-underline text-underline-yellow' >Refining Low Fidelity Wireframes Based On Feedback</p>
                <p className='text__subheading-bold'>Iterating on my design based on feedback</p>
                <div className='imp-flex'>
                <div className='row-flex'>
                    <div className='row-flex-content-casestudy col-width-half'>
                        <p className='text__subheading-semi-bold'>User???s delivery address on home page was hard to find</p>
                        <ul className='text__content ul-style'>
                            <li>Users were not able to quickly find their address details on the home page.</li>
                            <li>So I made the address details more prominent and accompanied it with a meaningful logo so that user can easily find their address details.</li>
                        </ul>
                    </div>
                    <div className='case-study-banner-image col-width-half'>
                        <img src={Improvement1 ? Improvement1 : ''} className='responsive-img imp-img' alt="cravefood improvement 1"></img>
                    </div>
                </div>
                <div className='row-flex'>
                    <div className='row-flex-content-casestudy col-width-half'>
                        <p className='text__subheading-semi-bold'>Upcoming orders on the home page is not prominent</p>
                        <ul className='text__content ul-style'>
                            <li>Users felt that the upcoming order details were not prominent enough</li>
                            <li>So I changed the placement of the upcoming order details by bringing it front and center.</li>
                        </ul>
                    </div>
                    <div className='case-study-banner-image col-width-half'>
                        <img src={Improvement2 ? Improvement2 : ''} className='responsive-img imp-img' alt="cravefood improvement 2"></img>
                    </div>
                </div>
                <div className='row-flex'>
                    <div className='row-flex-content-casestudy col-width-half'>
                        <p className='text__subheading-semi-bold'>Many users went back to cart screen to confirm their order before making payment</p>
                        <ul className='text__content ul-style'>
                            <li>When the users proceed to payment page, most of the users went back to cart page to reverify their order. </li>
                            <li>So I added a confirm order pop up which summarizes the order details and total bill payment to help the user feel sure about their order before proceeding to payment.</li>
                        </ul>
                    </div>
                    <div className='case-study-banner-image col-width-half impimg-3-align'>
                        <img src={Improvement3 ? Improvement3 : ''} className='responsive-img impimg-3' alt="cravefood improvement 3"></img>
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
                <p className='text__content text-underline text-underline-yellow' >High Fidelity Mockups And Prototype</p>
                <p className='text__subheading-bold'>The final design</p>
                <div className='case-study-content-inner'>
                    <p className='text__content'>Upon reiterating my low fidelity wireframes, I then created high fidelity mockups by adding color, changing the font and polishing the design of each wireframe and making it look like the final product.</p>
                    <p className='text__content'>Using the completed set of high fidelity digital wireframes, I created a high-fidelity prototype. The final high-fidelity prototype presented a more seamless user flow for filtering food and placing an order.</p>
                    <p className='text__content'>Colors were picked such that the contrast of the colors were accesssible and allowed text to be readable.</p>
                    <p className='text__content'>I used several of figma???s prototype features such as smart animate, after delay, overlay, and overflow scrolling to create the high fidelity prototype.</p>
                </div>
                <div className='banner-btn hifi-btn'>
                    <a className="text__content case-study-btn" href="https://www.figma.com/proto/GE3ZC1BWbiWABLVG1XQXGw/CraveFood-Design-File---Hiba?node-id=252%3A1983&scaling=scale-down&page-id=252%3A1982&starting-point-node-id=252%3A1983" target="_blank" rel="noreferrer">View Prototype &rarr;</a>
                    <a className="text__content case-study-btn" href="https://www.figma.com/file/GE3ZC1BWbiWABLVG1XQXGw/CraveFood-Design-File---Hiba?node-id=331%3A787" target="_blank" rel="noreferrer">View Design File &rarr;</a>
                    </div>
                    <div className='case-study-banner-image-center'>
                        <img src={HighFiWireframe ? HighFiWireframe : ''} className='responsive-img hifi-img' alt="cravefood high fidelity wireframes"></img>
                    </div>
                    <div className='case-study-banner-image-center'>
                        <img src={HighFiPrototype ? HighFiPrototype : ''} className='responsive-img hifi-proto-img' alt="cravefood high fidelity prototype"></img>
                    </div>
                </div>
                <div className='section-padding case-study-content'>
                <p className='text__content text-underline text-underline-yellow' >Sticker Sheet</p>
                <div className='case-study-content-inner'>
                    <p className='text__content'>I created a sticker sheet to keep the reusable components, text and color styles of my design in one place to keep my design uniform throughout the app.</p>
                    <p className='text__content'>I used features in figma such as auto layout and layout grids to further assure my design is uniform and clean.</p>
                </div>
                
                <div className='case-study-banner-image-center section-padding-min'>
                        <img src={Sticker ? Sticker : ''} className='responsive-img imp-img' alt="cravefood sticker sheet"></img>
                    </div>
                </div>
                <div className='section-padding case-study-content'>
                <p className='text__content text-underline text-underline-yellow' id="solution">The Solution</p>
                <p className='text__subheading-bold'>How my designs provided solutions to user???s problems</p>
                <div className='case-study-content imp-flex'>
                <div className='row-flex'>
                    <div className='row-flex-content-casestudy col-width-half'>
                        <p className='text__subheading-small'>Included a two step filter at the home page to get user???s search criteria upfront and only display food which matches with user???s search criteria</p>
                    </div>
                    <div className='case-study-banner-image col-width-half'>
                        <img src={Solution1 ? Solution1 : ''} className='responsive-img impimg-3' alt="cravefood solution 1"></img>
                    </div>
                </div>
                <div className='row-flex'>
                    <div className='row-flex-content-casestudy col-width-half'>
                        <p className='text__subheading-small'>Since users find it easier to tell what they are craving for, the filter step is written in a conversational tone to get to know what the user is craving for</p>

                    </div>
                    <div className='case-study-banner-image col-width-half impimg-3-align' >
                        <img src={Solution2 ? Solution2 : ''} className='responsive-img impimg-3' alt="cravefood solution 2"></img>
                    </div>
                </div>
                <div className='row-flex'>
                    <div className='row-flex-content-casestudy col-width-half'>
                        <p className='text__subheading-small'>Included image and tags for each food item to provide users more information on whether a food item matches with user???s criteria</p>
                    </div>
                    <div className='case-study-banner-image col-width-half impimg-3-align'>
                        <img src={Solution3 ? Solution3 : ''} className='responsive-img impimg-3' alt="cravefood solution 3"></img>
                    </div>
                </div>
                <div className='row-flex'>
                    <div className='row-flex-content-casestudy col-width-half'>
                        <p className='text__subheading-small'>Minimized clutter on screen to prevent information overload</p>

                    </div>
                    <div className='case-study-banner-image col-width-half impimg-3-align'>
                        <img src={Solution4 ? Solution4 : ''} className='responsive-img impimg-3' alt="cravefood solution 4"></img>
                    </div>
                </div>
                <div className='row-flex'>
                    <div className='row-flex-content-casestudy col-width-half'>
                        <p className='text__subheading-small'>Used color coding and whitespace to better organize content on screen</p>
                    </div>
                    <div className='case-study-banner-image col-width-half impimg-3-align'>
                        <img src={Solution5 ? Solution5 : ''} className='responsive-img impimg-3' alt="cravefood solution 5"></img>
                    </div>
                </div>
                </div>
            </div>
            <hr/>
            <div className='section-padding' id="conclusion">
                <p className='text__subheading align-center'>Conclusion</p>
            </div>
            <div className='section-padding case-study-content'>
                <p className='text__subheading-bold'>Lessons learned</p>
                <div className='case-study-content-inner'>
                    <p className='text__subheading-semi-bold'>It???s always about making it easier for the user</p>
                    <p  className='text__content'>Displaying lots of options to users may attract the users, but ultimately makes it harder for them to choose. By designing in a way that allows users to easily make sense of all the data ensures user satisfaction and improved user engagement.</p>
                </div>
                <div className='case-study-content-inner'>
                    <p className='text__subheading-semi-bold'>More rounds of iteration = More improvement</p>
                    <p  className='text__content'>By being focused on crafting a better solution and by not being too attached to my drafts, I was able to continously iterate and refine my designs and create better solutions</p>
                </div>
            </div>
            <hr/>
            <div  className='section-padding case-study-content'>
            <p className='text__subheading-bold align-center'>Thank you for reading!</p>
            <p className='text__content align-center'>If you liked my work and want to get in touch, drop me an email: hibafatima24@gmail.com</p>

            </div>
           
            <Footer/>
        </div>

    )
}
