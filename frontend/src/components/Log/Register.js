 import React, { useState } from "react";
 import { Link } from "react-router-dom";
 import "./Register.css";

 const Register = (props) => {
     const [email, setEmail] = useState('');
     const [pass, setPass] = useState('');
     const [name, setName] = useState('');

     const handleSubmit = (e) => {
         e.preventDefault();
         console.log(email);
     }

     return (
      <section class="section" id="projects">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h2>Register</h2>
              </div>
            </div>
            </div>
        <div class='subscribe-content'>
         <div className="auth-form-container" class="contact-form">
            <div class="row">
                <div class="col-md-2 col-sm-12">
                </div>
            <div class="col-md-8 col-sm-12">
         <form onSubmit={handleSubmit}>
             <label htmlFor="name">Full name</label>
             <input value={name} name="name" id="name" placeholder="full name" />
             <label htmlFor="email">email</label> 
             <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
             <label htmlFor="password">password</label>
             <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password" />
             <button class="main-button" type="submit">Register</button>
             <br></br>
             <br></br>               
            
         </form>
         <h6>Already have a account? <Link to="/Logpage"> Login </Link> here.</h6>
         <br></br></div></div></div>
         </div><p>Here you can ask for the creation of an admin profile on our website. If you have nothing to do here, please got to <Link to="/"> Home </Link> page !</p></div></section>
     )

 }
 export default Register; /*this one was not working because you forgot that line */