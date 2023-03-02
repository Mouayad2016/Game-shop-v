import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/*We have a problem with the menu bar when the page go little there no more menu only the tree line and after nothing */}
      <header class="header-area header-sticky">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                <Link to="/" className="logo-right">
                  <img
                    src="assets/images/logo.png"
                    class="logo"
                    heigth="30"
                    width="60"
                    alt=""
                  />
                </Link>
                <ul class="nav">
                  <li class="scroll-to-section">
                    <Link to="/"> Home </Link>
                  </li>
                  <li class="scroll-to-section">
                    <a href="#about"> About </a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="#projects"> Our Games </a>
                  </li>
                  {/*here you call the page you want */}
                  {/*
                  <li class="submenu">
                    <a href="javascript:;"> Products </a>
                    <ul>
                      <li>
                        <a href="#projects"> New </a>
                      </li>
                      <li>
                        <a href=""> Promo </a>
                      </li>
                      <li>
                        <a href="#projects"> Categories </a>
                      </li>
                      <li>
                        <a href=""> Search </a>
                      </li>
                    </ul>
  </li>*/}
                  <li class="scroll-to-section">
                    <Link to="/cartpage">
                      <img
                        src="assets/images/cart2_green.png"
                        alt=""
                        height="27"
                        width="27"
                      />
                    </Link>
                  </li>
                  <li class="scroll-to-section">
                  <Link to="/Logpage"><img src="assets/images/login.png"class="logo" heigth="20" width="40" alt=""/></Link>
                  </li>
                </ul>
                <a class="menu-trigger">
                  <span> Menu </span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
