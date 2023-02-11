import React from "react";
import { Slide } from "react-slideshow-image";

import img1 from "../images/apple.png";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

const prop = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

const RotateImage = () => {
  return (
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
    </div>
  );
};

export default RotateImage;
