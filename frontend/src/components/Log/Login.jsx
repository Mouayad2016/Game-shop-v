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
    <section class="login-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-heading">
              <h2>Login</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="login-container">
              <form class="login-form" onSubmit={handleSubmit}>
                <div class="row">
                  <div class="form-group">
                    <label class="form-label" for="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group">
                    <label class="form-label" for="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-md-8 offset-md-2">
                    <button type="submit" class="btn btn-primary btn-block">
                      Login
                    </button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-md-8 offset-md-2">
                    <div class="google-signin">
                      <p>Or sign in with:</p>
                      <button
                        type="button"
                        class="btn btn-outline-dark btn-block"
                        onClick={handleGoogleSignIn}
                      >
                        <i class="fab fa-google mr-2"></i>
                        Google
                      </button>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-md-8 offset-md-2">
                    <div class="register-link">
                      <p>Don't have an account?</p>
                      <Link to="/Register" class="btn btn-link">
                        Register
                      </Link>
                    </div>
                  </div>
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
