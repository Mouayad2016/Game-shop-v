import React, { useState } from "react";
import "./login.css";
import "./Register";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  const handleGoogleSignIn = () => {
    // handle Google sign-in logic here
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
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
        
        <button className="Register" onClick={() => props.onFormSwitch("./Register.js")}>Don't have an accound? Register here.</button>
      </form>
    </div>
  );
};

export default Login;
