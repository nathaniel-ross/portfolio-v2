import './App.css';
import Hero from './components/Hero';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Cards from "./components/Cards"
import Contact from "./components/Contact"
import About from "./components/About"


function App() {
  return (
    <div>
      <div id="top"></div>

      <Header />
        <Hero />
        <div id="projects"></div>
        <br />
        <br />
        <br />
        <Cards />
        <br />
        <div id="about"></div>
        <br />
        <About />
        <br />
        <div id="contact"></div>
        <br />
        <Contact />

      <Footer />
    </div>

  );
}

export default App;
