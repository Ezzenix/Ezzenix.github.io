import { useEffect, useRef } from "react";
import "../css/Home.css";
import Typewrite from "../components/Typewrite";

const Home = () => {
    const typewriterRef = useRef();
    useEffect(() => {
        Typewrite(typewriterRef.current, [
            "I am a programmer",
            "I am a web developer",
            "I am a game developer",
            "I am 16 years old",
        ]);
    }, []);

    return (
        <div className="home">
            <div className="home-title slide-in-left">
                <h2 className="unselectable">Hello,</h2>
                <h1 className="unselectable">I'm Ezzenix</h1>
                <p className="unselectable" ref={typewriterRef}>
                    Epic typewriter...
                </p>
                <div>
                    <button>About Me</button>
                    <button>Contact Me</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
