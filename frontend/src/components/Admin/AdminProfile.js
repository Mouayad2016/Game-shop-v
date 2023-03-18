import React, { useState, useEffect } from "react";
import axios from "axios";
import './Admin.css';

const AdminProfile = () => {


    const [userData, setUserData] = useState([]);
    const [admin, setAdmin] = useState();

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

    const id = sessionStorage.getItem("id");
    
    return (
        <div class="adminProducts">
            <div class="container">
                <h2> Your personal information </h2>
                    <div class="table-responsive">
                    <table class="table table-bordeless">
                        <thead>
                        <br></br>
                        </thead>
                        <tbody>
                        {userData.filter((e) => {
                            return e.id === parseInt(id) ? e : null;
                        }).map((e) =>(
                            <tr>
                            <td>Username : </td>
                            <td>{e.username}</td>
                            </tr>
                        ))}
                        <tr>
                        <td>Password : </td>
                        <td><i>Your password is encrypted and cannot be shown</i></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="container">
                
            </div>
        </div>
    );

};

export default AdminProfile;