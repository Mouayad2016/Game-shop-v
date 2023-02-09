import React from "react";
import "./rotateImage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";


const RotateImage = () => {
  return (
    <div className="Slides">
      <div>
      <h1>Games of the moment</h1>
      <Carousel infiniteLoop autoPlay>
        <div>
          <img src={img1} alt=""/>
          <p className="legend">RPG</p>
        </div>
        <div>
          <img src={img2} alt=""/>
          <p className="legend">Adventure</p>
        </div>
        <div>
          <img src={img3} alt=""/>
          <p className="legend">War</p>
        </div>
      </Carousel>
      </div>
    </div>
  );
};

export default RotateImage;
