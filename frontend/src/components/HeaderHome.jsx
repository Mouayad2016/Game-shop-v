import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getCookieValue } from "../helper/cookies";

const Header = () => {
  const [fName, setFname] = useState();
  const handle = () => {
    deleteAllCookies();
  }; 
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const email = searchParams.get("email");
    const firstName = searchParams.get("first_name");
    const lastName = searchParams.get("last_name");
    const user_id = searchParams.get("id");

    if (email && firstName && lastName && user_id) {
      document.cookie = `email=${email}; path=/;`;
      document.cookie = `firstName=${firstName}; path=/;`;
      document.cookie = `lastName=${lastName}; path=/;`;
      document.cookie = `user_id=${user_id}; path=/;`;
    }

    setFname(getCookieValue("firstName"));
    console.log(fName);
    console.log(searchParams);
  });
  function deleteAllCookies() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
    window.location.href = "http://localhost:3000";
  }
  return (
    <div>
      {/*Still need to configure this in a responsive way*/}
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
                    <a href="#projects"> Our Games </a>
                  </li>
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
                    <Link to="/Logpage">
                      <img
                        src="assets/images/login.png"
                        class="logo"
                        heigth="20"
                        width="40"
                        alt=""
                      />
                    </Link>
                  </li>
                  <div className="lol">
                    {fName ? (
                      <>
                        <li class="scroll-to-section">
                          Welcome back{" "}
                          <span style={{ color: "blue", fontWeight: "bold" }}>
                            {fName}
                          </span>
                        </li>
                        <a href="#" onClick={handle}>
                          {" "}
                          Logout
                        </a>
                        <li>
                        <Link to="/account">My account</Link>
                        </li>
                      </>
                    ) : (
                      <li class="scroll-to-section">
                        <a href="/Logpage"> Please login </a>
                      </li>
                    )}
                  </div>
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
