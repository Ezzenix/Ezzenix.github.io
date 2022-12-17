import '../css/Navbar.css'
//import { useEffect, useState, useRef } from 'react'

const Navbar = () => {
    return (
        <div className = "navbar">
            <section className = "navbar-buttons">
                <button className = "hover-underline unselectable">Home</button>
                <button className = "hover-underline unselectable">Skills</button>
                <button className = "hover-underline unselectable">Projects</button>
                <button className = "hover-underline unselectable">Contact</button>
            </section>
        </div>
    )
}

export default Navbar