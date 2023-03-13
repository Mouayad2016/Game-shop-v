import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import "./Register";
import { axios } from "axios";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  const handleGoogleSignIn = () => {
    try {
      window.location.href = "http://localhost:8000/auth/google-login";
      // const urlParams = new URLSearchParams(window.location.search);
    } catch (e) {}
  };

  return (
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h2>Login</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-12"></div>
          <div class="col-md-8 col-sm-12">
            <div className="login-container">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <div className="google-signin">
                  <p>Or sign in with:</p>
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={handleGoogleSignIn}
                  >
                    <i className="fab fa-google mr-2"></i>
                    Google
                  </button>
                </div>
                <div>
                  {" "}
                  <br></br>
                  <h6>
                    Don't have an accound?{" "}
                    <Link to="/Register"> Register </Link> here.
                  </h6>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
