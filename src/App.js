import './css/Main.css';
import Navbar from './components/Navbar'
import Home from './sections/Home'
import Skills from './sections/Skills'

function App() {
  return (
    <>
        <div className="background"></div>
        <Navbar />
        <Home />
        <Skills />
    </>
  );
}

export default App;
