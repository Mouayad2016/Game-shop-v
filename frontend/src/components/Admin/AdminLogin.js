import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import axios from 'axios';
import { sha256 } from 'js-sha256';

const AdminLogin = () => {

    const navigate = useNavigate();

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(sessionStorage.getItem(sessionStorage.getItem("authenticated")|| false));

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetchAllAdminData();
    }, []);

    const fetchAllAdminData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/administrators/get");
            const admin = response.data.map((admin) => ({
                id: admin.id,
                username: admin.username,
                password: admin.password,
            }));
            setUserData(admin);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        const account = userData.find((user) => user.username === username);
        const hashedPassword = sha256(password+username);
        if (account && account.password === hashedPassword) {
            setauthenticated(true)
            sessionStorage.setItem("authenticated", true);
            sessionStorage.setItem("id", account.id);
            navigate("/admin", {replace: true});
        }
    };

    return (
        <div>
            <center><img src="assets/images/logo.png" heigth="60" width="120"/></center>
            <h2>Welcome Back</h2>
            <p></p>
            <h6>Please log in with your administrators credentials</h6>
            <p>If you do not have administrators credentials yet, please contact the head administrator at <a href="mailto:h22anogo@du.se">h22anogo@du.se</a> to obtain temporary credentials</p>
            <div class="adminForm">
                <div className="form_container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="Username"
                                //placeholder='username'
                                value={username}
                                onChange={(e) => setusername(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="Password"
                                //placeholder='password'
                                onChange={(e) => setpassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
    
export default AdminLogin