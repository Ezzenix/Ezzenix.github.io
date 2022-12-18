import "../css/Navbar.css";
//import { useEffect, useState, useRef } from 'react'

const Navbar = () => {
    const scrollToElement = (className) => {
        document
            .getElementsByClassName(className)[0]
            .scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const scrollHome = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollSkills = () => {
        scrollToElement("Skills");
    };

    return (
        <div className="navbar">
            <section className="navbar-buttons">
                <button
                    className="hover-underline unselectable"
                    onClick={scrollHome}
                >
                    Home
                </button>
                <button
                    className="hover-underline unselectable"
                    onClick={scrollSkills}
                >
                    Skills
                </button>
                <button className="hover-underline unselectable">
                    Projects
                </button>
                <button className="hover-underline unselectable">
                    Contact
                </button>
            </section>
        </div>
    );
};

export default Navbar;
