import { useContext } from "react";
import "./Works.css";
import DotNet from "../../img/.net.png";
import MERN from "../../img/MERN.png";
import Azure from "../../img/Azure.png";
import Shopify from "../../img/SpringBoot.png";
import CICD from "../../img/Tools-for-CI-CD-Pipeline.png";
import { themeContext } from "../../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Can Work On All these
          </span>
          <span>Tech Stack</span>
          <span>
          React, Bootstrap, Tailwind CSS, Material UI
          <br />
          <br />
            Spring, Spring Boot, C#, ADO.NET, ASP.NET Core, MVC, Node JS
            <br />
            Express.js, JavaScript, Microservices
            <br />
            <br />
            MySQL, MongoDB, JDBC, Hibernate, Entity Framework.
            <br />
            <br />
            Azure, Docker, Kubernetes, Jenkins, Git, Jira, Postman, Swagger, CI/CD
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img height={170} src={DotNet} alt="" />
          </div>
          <div className="w-secCircle">
            <img height={170} src={MERN} alt="" />
          </div>
          <div className="w-secCircle">
            <img height={120} src={Azure} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img height={130} width={150} src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img height={130} width={150} src={CICD} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
