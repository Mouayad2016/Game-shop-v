import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div class="header">
      <div class="header_items">
        {" "}
        <a href="#"> Home </a> <a href="#"> Products </a>{" "}
        <a href="#"> About </a> <a href="#"> Help </a>{" "}
        <img
          class="header_cart_icon"
          src={require("../images/shopping-cart.png")}
          alt="shape"
          height={30}
          width={30}
        />{" "}
      </div>{" "}
    </div>
  );
};
export default Header;
