import "./css/Main.css";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Bottom from "./sections/Bottom";

function App() {
    return (
        <>
            <h1 id="wip">This is not finished yet!</h1>
            <div className="background"></div>
            <Navbar />
            <Home />
            <Skills />
            <Bottom />
        </>
    );
}

export default App;
