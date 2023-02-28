import React, {useState} from "react";
import { useHistory } from 'react-router-dom'
import Header from "../Header";
import LogItems from "./LogItems";

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

        
    return (
        <div>
            <Header />

            <h1>Login page</h1>
            <div className="col-sm-6 offset-sm-3">
            <input type="text" placeholder="email" className="form-control" />





            </div>
        </div>
    )
    }

    export default Login;










































// import React, { useState } from "react";
// import LogItems from "./LogItems";



// export const Login = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <div className="auth-form-container">
//         <form className="login-form" onSubmit={handleSubmit}>
//             <label htmlFor="email">email</label> 
//             <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//             <label htmlFor="password">password</label>
//             <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password" />
//             <button type="submit">Log In</button>                  
//         </form>
//         <button onClick={() => props.onFormSwitch('Login')}>Already have a account? Login here.</button>
//         </div>
//     )

// }
