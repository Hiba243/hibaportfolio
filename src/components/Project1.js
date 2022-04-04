import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import HeroImg from '../images/case-study-01-banner-img.png'
import Persona from '../images/persona.png'
import Journey from '../images/user-journey-map.png'
import Affinity from '../images/affinity.png'
import Competetive from '../images/competetive.png'
import UserFlow from '../images/userflow.jpg'
import LowFiWireframe from '../images/lofiwire.png'
import LowFiPrototype from '../images/lofiproto.png'
import Improvement1 from '../images/imp1.png'
import Improvement2 from '../images/imp2.png'
import Improvement3 from '../images/imp3.png'
import HighFiWireframe from '../images/hifi.png'
import HighFiPrototype from '../images/hifiproto.png'
import Sticker from '../images/sticker.png'
import Solution1 from '../images/filter2.png'
import Solution2 from '../images/filter.png'
import Solution3 from '../images/fooddesc.png'
import Solution4 from '../images/sol1.png'
import Solution5 from '../images/cart.png'

export default function Project1() {
    return (
        <div>
            <Navbar />
            <div className='section-padding case-study-banner bg-yellow'>
                <div className='case-study-banner-content'>
                    <p className='text__content'>CraveFood</p>
                    <p className='text__subheading'>Designing an easier way for users to find food they want to order from the vast amount of options present in a food ordering app </p>
                    <p className='text__content'>UI/UX design for a mobile app</p>
                    <div className='banner-logo-flex'>
                        <span className='logo-size material-icons'>watch_later</span>
                        <p className='text__content'>January 2022 - April 2022</p>
                    </div>
                    <div className='banner-logo-flex'>
                        <span className='logo-size material-icons'>account_circle</span>
                        <p className='text__content'>Project for Google UX Design Certificate</p>
                    </div>
                    <div className='banner-btn'>
                    <a className="text__content case-study-btn" href="https://www.figma.com/proto/GE3ZC1BWbiWABLVG1XQXGw/CraveFood-Design-File---Hiba?node-id=252%3A1983&scaling=scale-down&page-id=252%3A1982&starting-point-node-id=252%3A1983" target="_blank">View Prototype &rarr;</a>
                    <a className="text__content case-study-btn" href="https://www.figma.com/file/GE3ZC1BWbiWABLVG1XQXGw/CraveFood-Design-File---Hiba?node-id=331%3A787" target="_blank">View Design File &rarr;</a>
                    </div>
                </div>
                <div className='case-study-banner-image-center'>
                    <img src={HeroImg ? HeroImg : ''} className='responsive-img' alt="home-pg"></img>
                </div>
            </div>
            <div className='section-padding'>
                <p className='text__subheading align-center'>Quick Links</p>
                <br />
                <p className='text__content align-center'><a href='#1' className='underlined'>The problem</a> | <a href='#1' className='underlined'> Understanding user’s needs and frustrations</a> | <a href='#1' className='underlined'>Ideating solutions</a></p>
                <br />
                <p className='text__content align-center'><a href='#1' className='underlined'>Starting the design</a> | <a href='#1' className='underlined'> Testing and refining the design</a> | <a href='#1' className='underlined'>Finalizing the design</a> | <a href='#1' className='underlined'>Conclusion</a></p>
            </div>
            <hr />
            <div className='section-padding case-study-content'>
                <p className='text__content text-underline text-underline-yellow' >The problem</p>
                <p className='text__subheading-bold'>Users are often overwhelmed trying to decide what to order in a food ordering app</p>
                <p className='text__content'>With this case study, I wanted to explore the reason why we face difficulty in deciding what to order in food ordering apps, and I wanted to design a solution for it.</p>
            </div>
            <hr />
            <div className='section-padding'>
                <p className='text__subheading align-center'>Understanding user's needs and frustrations</p>
                <br />
                <p className='text__content align-center'><a href='#1' className='underlined'>Research</a> | <a href='#1' className='underlined'> User interviews</a> | <a href='#1' className='underlined'>Competetive audit</a></p>
            </div>
            <div className='section-padding case-study-content'>
                <p className='text__content text-underline text-underline-yellow' >Research</p>
                <p className='text__subheading-bold'>Presenting too many choices to users has shown to have negative effects on decision making ability</p>
                <p className='text__content'>I began to draw from research articles on the topic of effect of too many choices, where I learned that: </p>
                <div className='div-align-center'>
                    <p className='text__content align-center width-half'>“Choice overload leads users to become frustrated, less likely to choose, and less satisfied with their selection”</p>
                </div>
            </div>
            <div className='section-padding case-study-content'>
                <p className='text__content text-underline text-underline-yellow' >User interviews</p>
                <p className='text__subheading-bold'>My interviewees spent a significant amount of time trying to find the perfect food to order,
                    but ended up feeling unsure about their selection</p>
                <div className='case-study-content-inner'>
                    <p className='text__content'>I conducted user interviews to further understand users who find difficulty deciding what food to order. I asked them the below questions to find themes on user’s experience with a food ordering app. </p>
                    <p className='text__content'>I then created personas to represent the primary user groups of food ordering app and also mapped out their journey on a food ordering app to identify at which steps users face difficulties.</p>
                    <p className='text__content'>I summarized the findings on user’s current experience with a food experience into an affinity diagram as well.</p>
                </div>
                <div className='case-study-content-inner'>
                    <p className='text__subheading-semi-bold'>User interview questions</p>
                    <ul className='text__content ul-style'>
                        <li>How do you decide what food you want to order?</li>
                        <li>What parts of a food ordering app do you like?</li>
                        <li>What parts of a food ordering app do you think can be improved?</li>
                    </ul>
                </div>
                <div className='case-study-content-inner'>
                    <p className='text__subheading-semi-bold'>Key insights obtained from the user interviews</p>
                    <ul className='text__content ul-style'>
                        <li>The primary user groups I found were youngsters and adults.</li>
                        <li>Users spend a significant amount of time trying to find a food item they’ll like.</li>
                        <li>Users often feel overloaded with all the options and information heavy UI.</li>
                    </ul>
                </div>
                <div className='case-study-content-inner'>
                    <p className='text__subheading-semi-bold'>Persona of a user using food ordering app</p>
                    <div className='case-study-banner-image-center'>
                        <img src={Persona ? Persona : ''} className='responsive-img' alt="home-pg"></img>
                    </div>
                </div>
                <div className='case-study-content-inner'>
                    <p className='text__subheading-semi-bold'>User journey map</p>
                    <div className='case-study-banner-image-center'>
                        <img src={Journey ? Journey : ''} className='responsive-img' alt="home-pg"></img>
                    </div>
                </div>
                <div className='case-study-content-inner'>
                    <p className='text__subheading-semi-bold'>Affinity Diagram</p>
                    <div className='case-study-banner-image-center'>
                        <img src={Affinity ? Affinity : ''} className='responsive-img' alt="home-pg"></img>
                    </div>
                </div>
            </div>
            <div className='section-padding case-study-content'>
                <p className='text__content text-underline text-underline-yellow' >Competetive audit</p>
                <p className='text__subheading-bold'>Competing app’s did not provide a easy way for users to decide what food they want to order</p>
                <p className='text__content'>I analyzed popular food ordering apps and found that most of them presented an overload of information and choice to the users. The only thing they offered to help users to make decision more easily was a traditional filter button, which wasn’t doing much help. Improving the filter functionality became my opportunity for the solution.</p>
                <div className='case-study-banner-image-center'>
                    <img src={Competetive ? Competetive : ''} className='responsive-img' alt="home-pg"></img>
                </div>
            </div>
            <hr />
            <div className='section-padding'>
                <p className='text__subheading align-center'>Ideating solutions</p>
                <br />
                <p className='text__content align-center'><a href='#1' className='underlined'>Different approaches considered </a> | <a href='#1' className='underlined'> Finalized approach</a></p>
            </div>
            <div className='section-padding case-study-content'>
                <p className='text__content text-underline text-underline-yellow' >Different approaches considered</p>
                <p className='text__subheading-bold'>Upon considering the effects of other approaches, I stuck to my idea of a two step filter. </p>
                <p className='text__content'>I spent several days trying to explore different approaches: displaying food by categories and a two step filter. However I upon thinking of the effect of displaying food by categories, I thought it could still potentially cause confuse the user as to which category they should explore and it may end up in the user exploring all the categories and becoming overwhelmed. Thus I chose to stick with the two step filter.</p>
            </div>
            <div className='section-padding case-study-content'>
                <p className='text__content text-underline text-underline-yellow' >Finalized approach</p>
                <p className='text__subheading-bold'>The idea behind the two step filter is to get the user’s search criteria right from the start, and only show food items which match with the user’s criteria.</p>
                <div className='case-study-content-inner'>
                    <p className='text__subheading-semi-bold'>Improving the decision making process of the user by incorporating a two step filter</p>
                    <ul className='text__content ul-style'>
                        <li>It was found that when users open a food ordering app, they are presented with a lot of amazing options to choose from, but that often makes them forget their initial search criteria</li>
                        <li>So before the user goes down the rabbit hole of endless scrolling, we should ask the user “What type of food are you looking for?” as this can help the user remember their initial search criteria.</li>
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
            <div className='section-padding'>
                <p className='text__subheading align-center'>Starting the design</p>
                <br />
                <p className='text__content align-center'><a href='#1' className='underlined'>User flow of my app</a> | <a href='#1' className='underlined'> Low fidelity wireframe and prototype </a></p>
            </div>
            <div className='section-padding case-study-content'>
                <p className='text__content text-underline text-underline-yellow' >User flow of my solution</p>
                <p className='text__subheading-bold'>Constructing the user flow of my solution helped me visualize the solution which guided me while building wireframes</p>
                <p className='text__content'>I constructed a user flow of a basic start to finish journey of ordering a food on a food ordering app and also incorporated my key solution i.e. a two step filter</p>
                <div className='case-study-banner-image-center'>
                    <img src={UserFlow ? UserFlow : ''} className='responsive-img' alt="home-pg"></img>
                </div>
            </div>
            <div className='section-padding case-study-content'>
                <p className='text__content text-underline text-underline-yellow' >Low fidelity wireframes and prototype</p>
                <p className='text__subheading-bold'>I built low-fidelity wireframes to focus on the creating the app layout in alignment with my solution</p>
                <p className='text__content'>I started drawing up low-fidelity wireframes on figma to finalize the layout of each screen before moving to visuals details such as colors and fonts. I then connected the screens to create a working low-fidelity prototype.</p>
                <div>
                    <div className='case-study-banner-image-center'>
                        <img src={LowFiWireframe ? LowFiWireframe : ''} className='responsive-img' alt="home-pg"></img>
                    </div>
                    <div className='case-study-banner-image-center'>
                        <img src={LowFiPrototype ? LowFiPrototype : ''} className='responsive-img' alt="home-pg"></img>
                    </div>
                </div>
            </div>
            <hr />
            <div className='section-padding'>
                <p className='text__subheading align-center'>Testing and refining the design</p>
                <br />
                <p className='text__content align-center'><a href='#1' className='underlined'>Usability Study </a> | <a href='#1' className='underlined'> Refining designs based on usability study findings </a></p>
            </div>
            <div className='section-padding case-study-content'>
                <p className='text__content text-underline text-underline-yellow' >Conducting usability study to test my design</p>
                <p className='text__subheading-bold'>Conducting a usability study provided useful feedback on my design</p>
                <p className='text__content'>I coducted a usability study on my low fidelity prototype to find improvement opportunties in my design. I iterated and refined my designs based on feedback from 3 users and 2 peers.</p>
            </div>
            <div className='section-padding case-study-content'>
                <p className='text__content text-underline text-underline-yellow' >Refining low fidelity wireframes based on feedback</p>
                <p className='text__subheading-bold'>Iterating on my design based on feedback</p>
                <div className='row-flex'>
                    <div className='row-flex-content-casestudy'>
                        <p className='text__subheading-semi-bold'>User’s delivery address on home page was hard to find</p>
                        <ul className='text__content ul-style'>
                            <li>Users were not able to easily find their address details on the home page.</li>
                            <li>So I made the address details more prominent and accompanied it with a meaningful logo so that user can easily find their address details.</li>
                        </ul>
                    </div>
                    <div className='case-study-banner-image'>
                        <img src={Improvement1 ? Improvement1 : ''} className='responsive-img' alt="home-pg"></img>
                    </div>
                </div>
                <div className='row-flex'>
                    <div className='row-flex-content-casestudy'>
                        <p className='text__subheading-semi-bold'>Upcoming orders on the home page is not prominent</p>
                        <ul className='text__content ul-style'>
                            <li>Users were not able to easily find their address details on the home page.</li>
                            <li>So I changed the placement of the upcoming order details by bringing it front and center.</li>
                        </ul>
                    </div>
                    <div className='case-study-banner-image'>
                        <img src={Improvement2 ? Improvement2 : ''} className='responsive-img ' alt="home-pg"></img>
                    </div>
                </div>
                <div className='row-flex'>
                    <div className='row-flex-content-casestudy'>
                        <p className='text__subheading-semi-bold'>Many users went back to cart screen to confirm their order before making payment</p>
                        <ul className='text__content ul-style'>
                            <li>After users view their cart and proceed to payment page, most of the users went back to cart page to reverify their order before making the payment. </li>
                            <li>So when the user is on the view cart page and clicks on make payment button, I added a confirm order pop up which summarizes the order details and total bill payment to help the user feel sure about their order before proceeding to payment.</li>
                        </ul>
                    </div>
                    <div className='case-study-banner-image'>
                        <img src={Improvement3 ? Improvement3 : ''} className='responsive-img' alt="home-pg"></img>
                    </div>
                </div>
            </div>
            <hr />
            <div className='section-padding'>
                <p className='text__subheading align-center'>Finalizing the design</p>
                <br />
                <p className='text__content align-center'><a href='#1' className='underlined'>High fidelity mockups and prototype</a> | <a href='#1' className='underlined'> The solution </a></p>
            </div>
            <div className='section-padding case-study-content'>
                <p className='text__content text-underline text-underline-yellow' >High fidelity mockups and prototype</p>
                <p className='text__subheading-bold'>The Final Design</p>
                <div className='case-study-content-inner'>
                    <p className='text__content'>Upon reiterating my low fidelity wireframes, I then created high fidelity mockups by adding color, changing the font and polishing the design of each wireframe and making it look like the final product.</p>
                    <p className='text__content'>Using the completed set of high fidelity digital wireframes, I created a high-fidelity prototype. The final high-fidelity prototype presented a more seamless user flow for filtering food and placing an order.</p>
                    <p className='text__content'>Colors were picked such that the contrast of the colors were accesssible and allowed text to be readable.</p>
                    <p className='text__content'>I used several of figma’s prototype features such as smart animate, after delay, and overflow scrolling.</p>
                </div>
                <div className='banner-btn'>
                    <a className="text__content case-study-btn" href="https://www.figma.com/proto/GE3ZC1BWbiWABLVG1XQXGw/CraveFood-Design-File---Hiba?node-id=252%3A1983&scaling=scale-down&page-id=252%3A1982&starting-point-node-id=252%3A1983" target="_blank">View Prototype &rarr;</a>
                    <a className="text__content case-study-btn" href="https://www.figma.com/file/GE3ZC1BWbiWABLVG1XQXGw/CraveFood-Design-File---Hiba?node-id=331%3A787" target="_blank">View Design File &rarr;</a>
                    </div>
                    <div className='case-study-banner-image-center section-padding'>
                        <img src={HighFiWireframe ? HighFiWireframe : ''} className='responsive-img' alt="home-pg"></img>
                    </div>
                    <div className='case-study-banner-image-center'>
                        <img src={HighFiPrototype ? HighFiPrototype : ''} className='responsive-img' alt="home-pg"></img>
                    </div>
                </div>
                <div className='section-padding case-study-content'>
                <p className='text__content text-underline text-underline-yellow' >Sticker sheet</p>
                <div className='case-study-content-inner'>
                    <p className='text__content'>I created a sticker sheet to keep the reusable components, text and color styles of my design in one place to help keep my design uniform throughout the app.</p>
                    <p className='text__content'>I used features in figma such as auto layout and layout grids to further assure my design is uniform and clean.</p>
                </div>
                
                <div className='case-study-banner-image-center section-padding'>
                        <img src={Sticker ? Sticker : ''} className='responsive-img' alt="home-pg"></img>
                    </div>
                </div>
                <div className='section-padding case-study-content'>
                <p className='text__content text-underline text-underline-yellow' >The Solution</p>
                <p className='text__subheading-bold'>How my designs provided solutions to user’s problems</p>
                <div className='case-study-content'>
                <div className='row-flex'>
                    <div className='row-flex-content-casestudy'>
                        <p className='text__subheading-small'>Included a two step filter at the home page to get user’s criteria upfront and only display food which matches with user’s criteria</p>
                    </div>
                    <div className='case-study-banner-image'>
                        <img src={Solution1 ? Solution1 : ''} className='responsive-img' alt="home-pg"></img>
                    </div>
                </div>
                <div className='row-flex'>
                    <div className='row-flex-content-casestudy'>
                        <p className='text__subheading-small'>Used a conversational and friendly tone at the filter step to make the decision making process simpler</p>

                    </div>
                    <div className='case-study-banner-image' >
                        <img src={Solution2 ? Solution2 : ''} className='responsive-img' alt="home-pg"></img>
                    </div>
                </div>
                <div className='row-flex'>
                    <div className='row-flex-content-casestudy'>
                        <p className='text__subheading-small'>Included image and tags for each food item to provide more information on whether a food item matches with user’s criteria</p>
                    </div>
                    <div className='case-study-banner-image'>
                        <img src={Solution3 ? Solution3 : ''} className='responsive-img' alt="home-pg"></img>
                    </div>
                </div>
                <div className='row-flex'>
                    <div className='row-flex-content-casestudy'>
                        <p className='text__subheading-small'>Minimized clutter on screen to prevent information overload</p>

                    </div>
                    <div className='case-study-banner-image'>
                        <img src={Solution4 ? Solution4 : ''} className='responsive-img' alt="home-pg"></img>
                    </div>
                </div>
                <div className='row-flex'>
                    <div className='row-flex-content-casestudy'>
                        <p className='text__subheading-small'>Used color coding and whitespace to better organize content on screen</p>
                    </div>
                    <div className='case-study-banner-image'>
                        <img src={Solution5 ? Solution5 : ''} className='responsive-img' alt="home-pg"></img>
                    </div>
                </div>
                </div>
            </div>
            <hr/>
            <div className='section-padding'>
                <p className='text__subheading align-center'>Conclusion</p>
            </div>
            <div className='section-padding case-study-content'>
                <p className='text__subheading-bold'>Lessons learned</p>
                <div className='case-study-content-inner'>
                    <p className='text__subheading-semi-bold'>It’s always about making it easier for the user</p>
                    <p  className='text__content'>Displaying lots of options to users may attract the users, but ultimately makes it harder for them to choose. Making it easier for the user ensures user satisfaction and improved user engagement.</p>
                </div>
                <div className='case-study-content-inner'>
                    <p className='text__subheading-semi-bold'>Coming up with new ideas can lead to an improved innovative solution</p>
                    <p  className='text__content'>It can be tempting to make designs similar to existing solutions, but every great existing designs has potential for improvement too. Trying to come up with new solutions can lead to new ways of solving problems and different opportunities to try and improve user experience.</p>
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
