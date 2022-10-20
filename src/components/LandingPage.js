import React from "react";
import { IconContext } from "react-icons";
import { BsLaptop } from "react-icons/bs";
import { TypeAnimation } from 'react-type-animation';
const LandingPage = () => {
    return (
        <section className="section-padding">
            <div className="text__heading landing-page-heading">
                Hiba Fatima
                <IconContext.Provider value={{ style: { verticalAlign: 'middle', color: 'fed206' } }}>
                    <div>
                        <BsLaptop />
                    </div>
                </IconContext.Provider>
                <TypeAnimation
                    sequence={['Web Developer', 1000, '']}
                    repeat={Infinity}
                    speed={20}
                    cursor={true}
                />
            </div>
        </section>
    );

};

export default LandingPage;