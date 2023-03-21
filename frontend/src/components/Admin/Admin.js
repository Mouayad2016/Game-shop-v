import React, { useState, useEffect } from 'react';
import './Admin.css';
import axios from "axios";

function Admin() {
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    fetchAllAdminData();
  }, []);

  const fetchAllAdminData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/administrators/get");
      const adm = response.data.map((adm) => ({
        id: adm.id,
        username: adm.username,
        created_at: adm.created_at,
        updated_at: adm.updated_at,
      }));
      setAdminData(adm);
    } catch (r) {
      console.log(r);
    }
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "", 
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/administrators/post",
        formData
      );
      console.log(response.data);
      setFormData({
        username: "",
        password: "",
      });
      setErrorMessage("Bravo, you just create a new admin");
      window.location.reload(false);
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while creating the new admin.");
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
    <section>
    <div class="adminProducts">
      <h3>All admin</h3>
      <div class="container-fluid">
        <div class="table-responsive">
          <table class="table table-bordeless">
            <thead>
              <tr class="bg-light">
                <th width="5%">#</th>
                <th width="25%">Username</th>
                <th width="25%">Creation Date</th>
                <th width="25%">Last update</th>
              </tr>
            </thead>
            <tbody>
              {adminData.map((r) => (
                <tr>
                            <td>{r.id}</td>
                            <td>{r.username}</td>
                            <td>{r.created_at}</td>
                            <td>{r.updated_at}</td>
                        </tr>
                      ))}
          
                    
                    </tbody>
                </table>
                
            </div>
        </div>
      </div>

        <section>
      <div class="col-lg-12"><h1>Create a new admin</h1></div>
      <div class="adminForm">
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="name">UserName</label>
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
          <textarea
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          </div>
        <button type="submit" className="btn btn-primary">
          Create 
        </button>
      </form>

      
    </div>
    </div>
   </section> 
    </section>
    );
};

    
export default Admin