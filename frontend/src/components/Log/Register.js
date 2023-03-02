 import React, { useState } from "react";
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
         <div className="auth-form-container">
         <form onSubmit={handleSubmit}>
             <label htmlFor="name">Full name</label>
             <input value={name} name="name" id="name" placeholder="full name" />
             <label htmlFor="email">email</label> 
             <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
             <label htmlFor="password">password</label>
             <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password" />
             <button type="submit">Log In</button> 
             <button className="Login" onClick={() => props.onFormSwitch("../Log/Login.jsx")}>Already have a account? Login here.</button>              
            
         </form>
         
         </div>
     )

 }
 export default Register; /*this one was not working because you forgot that line */