import React from "react";
import "./rotateImage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";


const RotateImage = () => {
  return (
    <div className="Slides">
      <div>
      <h1>Game of the moment</h1>
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img src={img1} alt=""/>
        </div>
        <div className="image">
          <img src={img2} alt=""/>
        </div>
        <div className="image">
          <img src={img3} alt=""/>
        </div>
      </Carousel>
      </div>
    </div>
  );
};

export default RotateImage;
