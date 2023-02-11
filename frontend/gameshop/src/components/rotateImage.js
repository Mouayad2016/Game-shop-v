import React from "react";
import "./rotateImage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";


const RotateImage = () => {
  return (
<<<<<<< HEAD
    <div Class>
      {" "}
      {/* //{" "}
                  <Slide>
                    //{" "}
                    <div className="eachSlide">
                      // //{" "}
                      <div>
                        // // <div img src={require("../images/apple.png")} alt="img1" /> //{" "}
                      </div>{" "}
                      //{" "}
                    </div>{" "}
                    //{" "}
                    <div className="eachSlide">
                      // <img src={img2} alt="img2" /> //{" "}
                    </div>{" "}
                    //{" "}
                    <div className="eachSlide">
                      // <img src={img3} alt="img2" /> //{" "}
                    </div>{" "}
                    //{" "}
                  </Slide>{" "}
                  // <p> add your image </p>{" "} */}{" "}
=======
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
>>>>>>> 29bf3506fcd56f6f01b52e23e428c326d3219dcc
    </div>
  );
};

export default RotateImage;
