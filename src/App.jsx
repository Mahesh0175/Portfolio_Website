import { useContext } from "react";
import "./App.css";
import Testimonial from "./components/Testimonial/Testimonial";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "../Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme?.state?.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;