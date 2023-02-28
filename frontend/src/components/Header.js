import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {" "}
      {/*We have a problem with the menu bar when the page go little there no more menu only the tree line and after nothing */}{" "}
      <header class="header-area header-sticky">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                <Link to="/">
                  <img
                    src="assets/images/logo.png"
                    class="logo"
                    heigth="30"
                    width="60"
                    alt=""
                  />
                </Link>{" "}
                <ul class="nav">
                  <li class="scroll-to-section">
                    {" "}
                    <Link to="/"> Home </Link>{" "}
                  </li>{" "}
                  <li class="scroll-to-section">
                    {" "}
                    <Link to="/Logpage"> Login </Link>{" "}
                  </li>{" "}
                  {/*here you call the page you want */}{" "}
                  <li class="scroll-to-section">
                    {" "}
                    <Link to="/Register"> Register </Link>{" "}
                  </li>{" "}
                  <li class="scroll-to-section">
                    {" "}
                    <Link to="/cartpage">
                      {" "}
                      <img
                        src="assets/images/cart2_green.png"
                        alt=""
                        height="27"
                        width="27"
                      />{" "}
                    </Link>{" "}
                  </li>{" "}
                  <li class="scroll-to-section">
                    {" "}
                    <a href="#contact-us"> Contact us </a>{" "}
                  </li>{" "}
                </ul>{" "}
                <a class="menu-trigger">
                  <span> Menu </span>{" "}
                </a>{" "}
              </nav>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
    </div>
  );
};

export default Header;
