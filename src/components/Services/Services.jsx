// Services.jsx
import { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../../Context";
import { motion } from "framer-motion";
import Resume from './Mahesh Mankar.pdf';

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Tech</span>
        <span>Stack</span>
        <span>
        * Results-driven Software Engineer with hands-on expertise in full-stack development,<br />
         microservices, and DevOps, gained through an intensive 6-month PG-DAC program at CDAC Pune. <br /> <br />
         * Proficient in designing and implementing scalable <br /> web applications using Java, Spring Boot, React.js, <br /> <br />
           Node.js, and database technologies like MySQL and MongoDB. <br /> Skilled in Data Structures & Algorithms,
            Agile methodologies, and CI/CD pipelines. <br /> <br /> Demonstrated problem-solving abilities through award-winning <br />
             hackathon projects and personal initiatives such as <br />
              an e-commerce platform and an Ayurvedic Management System.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Frontend"}
            detail={"JavaScript, React, Bootstrap,Tailwind CSS,Material UI"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Backend"}
            detail={"Node JS, Express.js, Spring, Spring Boot, ADO.NET, ASP.NET Core, MVC."}
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"DevOps"}
            detail={
              "Docker, Jenkins, Git, AWS, Azure"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;