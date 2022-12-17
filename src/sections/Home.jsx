import { useEffect, useRef } from 'react'
import '../css/Home.css'
import Typewrite from '../components/Typewrite'

const Home = () => {
    const typewriterRef = useRef()
    useEffect(() => {
        Typewrite(typewriterRef.current, [
            "I am a programmer",
            "I kidnap children"
        ])
    }, [])

    return (
        <div className = "home">
            <div className="home-title slide-in-left">
                <h2 className="unselectable">Hello,</h2>
                <h1 className="unselectable">I'm Ezzenix</h1>
                <p className="unselectable" ref={typewriterRef}>I am pro gamer</p>
                <div>
                    <button>About Me</button>
                    <button>Contact Me</button>
                </div>
            </div>
        </div>
    )
}

export default Home