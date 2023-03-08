import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import axios from 'axios';

const AdminLogin = () => {

    const navigate = useNavigate();

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

    const users = [{ username: "Loana", password: "Loanamdp" }];

    /*const [userData, setUserData] = useState([]);

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
    };*/

    const handleSubmit = (event) => {
        event.preventDefault()
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            setauthenticated(true)
            localStorage.setItem("authenticated", true);
            navigate("/admin", {replace: true});
        }
    };

    return (
        <div>
            <p>Welcome Back</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Username"
                    placeholder='username'
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                />
                <input
                    type="password"
                    name="Password"
                    placeholder='password'
                    onChange={(e) => setpassword(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
    
export default AdminLogin