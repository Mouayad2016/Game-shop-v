import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div class="App-header">
      <div class="header_logo">
        {" "}
        <img
          class="header_me_icon"
          src={require("../images/me_white.png")}
          alt="shape"
          height={30}
          width={30}
        />{" "}
      </div>{" "}
      <div class="header_items">
        {" "}
        <a href="#"> Home </a> <a href="#"> Products </a>{" "}
        <a href="#"> About </a> <a href="#"> Help </a>{" "}
        <a href="#">
          {" "}
          <img
            class="header_cart_icon"
            src={require("../images/cart2_white.png")}
            alt="shape"
            height={30}
            width={30}
          />{" "}
        </a>{" "}
        <a href="#">
          {" "}
          <img
            class="header_me_icon"
            src={require("../images/me_white.png")}
            alt="shape"
            height={30}
            width={30}
          />{" "}
        </a>{" "}
        <p className="contact">
          {" "}
          Contact us: +46 xxxxxxx | E - mail: xxxxxxx @geek.com{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
};
export default Header;
