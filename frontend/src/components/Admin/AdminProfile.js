import React, { useState, useEffect } from "react";
import axios from "axios";
import './Admin.css';

const AdminProfile = () => {

    const [admin, setAdmin] = useState([]);
    const id = sessionStorage.getItem("id");

    useEffect(() => {
        fetchAdminData();
    }, []);

    const fetchAdminData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/administrators/${id}/get`);
            const admin = response.data;
            setAdmin(admin);
        } catch (error) {
            console.log(error);
        }
    };

    const [formData, setFormData] = useState({
        username: admin.username,
        password: admin.password, 
      });
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.put(
            `http://127.0.0.1:8000/administrators/${id}/update`,
            formData
          );
          console.log(response.data);
          setFormData({
            username: admin.username,
            password: admin.password,
          });
          setErrorMessage("You just changed your profile.");
          window.location.reload(false);
        } catch (error) {
          console.error(error);
          setErrorMessage("An error occurred while updating your profile.\nMake sure you have filled both fields before submitting.");
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    
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
                        <tr>
                        <td>Username : </td>
                        <td>{admin.username}</td>
                        </tr>
                        <tr>
                        <td>Password : </td>
                        <td><i>Your password is encrypted and cannot be shown</i></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <section>
                <br></br>
                <br></br>
                <div class="col-lg-12">
                    <h3>Change your profile</h3>
                    <p>Both fields are mandatory</p>
                </div>
                <div class="adminForm">
                    <div className="form_container">
                        <form onSubmit={handleSubmit}>
                            {errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>
                            )}
                            <div className="form-group">
                            <label htmlFor="name">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="description">New password</label>
                            <input
                                type="text"
                                className="form-control"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            </div>
                            <button type="submit" className="btn btn-primary">
                            Modify 
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );

};

export default AdminProfile;