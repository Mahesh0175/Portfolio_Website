import { useContext } from 'react';
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { themeContext } from "../../../Context";

const Navbar = () => {

    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
        <span className="n-name" style={{ color: darkMode ? "white" : "" }}>Mahesh</span>
        </Link>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link  activeClass="active" to="Navbar" spy={true} smooth={true} style={{ color: darkMode ? "white" : "" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true} style={{ color: darkMode ? "white" : "" }}>
                Services
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true} style={{ color: darkMode ? "white" : "" }}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true} style={{ color: darkMode ? "white" : "" }}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true} style={{ color: darkMode ? "white" : ""   }}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}  >
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
