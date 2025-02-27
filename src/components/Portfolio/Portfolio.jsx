import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules"; // Added Autoplay

import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 

import NEWS from "../../img/news.png";
import Ecommerce from "../../img/ecommerce.png";
import TEXT from "../../img/text.png";
import TASK from "../../img/task.png";

import { themeContext } from "../../../Context";
import "./Portfolio.css";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Swiper slider with marquee effect */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Added Autoplay module
        spaceBetween={30}
        slidesPerView={3}
        loop={true} // Enables continuous looping
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={5000} // Adjust this value to control scrolling speed (in milliseconds)
        allowTouchMove={true} // Allows manual dragging
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://react-news-app-me.netlify.app" target="_blank" rel="noopener noreferrer">
            <img src={NEWS} alt="News App" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ecom-by-mahesh.netlify.app" target="_blank" rel="noopener noreferrer">
            <img src={Ecommerce} alt="Ecommerce App" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://textutils-react-app-me.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={TEXT} alt="TextUtils App" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.linkedin.com/in/mahesh-mankar-044772238" target="_blank" rel="noopener noreferrer">
            <img src={TASK} alt="Task Manager" />
          </a>
        </SwiperSlide>
        {/* Duplicate slides for smoother continuous effect */}
        <SwiperSlide>
          <a href="https://react-news-app-me.netlify.app" target="_blank" rel="noopener noreferrer">
            <img src={NEWS} alt="News App" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ecom-by-mahesh.netlify.app" target="_blank" rel="noopener noreferrer">
            <img src={Ecommerce} alt="Ecommerce App" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;