import "./App.css";
import About from "./features/About/about";
import Home from "./features/Home/home";

function App() {
  return (
    <div>
      <div className="navbar">
        <div className="logo_div">
          <h1 className="logo">Logo</h1>
        </div>
        <a href="#home" className="nav">
          Home
        </a>
        <a href="#project" className="nav">
          Projects
        </a>
        <a href="#about" className="nav">
          About
        </a>
        <a href="#contact" className="nav">
          Contact
        </a>
      </div>
      <div>
        <section className="section" id="home">
          <Home />
        </section>
        <section className="section" id="project"></section>
        <section className="section" id="about">
          <About />
        </section>
        <section className="section" id="contact"></section>
      </div>
    </div>
  );
}

export default App;
