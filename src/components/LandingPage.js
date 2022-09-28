import React from "react";
import { IconContext } from "react-icons";
import { BsLaptop } from "react-icons/bs";
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
                Web Developer
            </div>
        </section>
    );

};

export default LandingPage;