import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CreateCatForm() {
  const [formData, setFormData] = useState({
    name: "",
    des: "",
    c_date: new Date(),
    u_date: new Date(),
    id_creator: null,
    id_deletor: null, 
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/category/post",
        formData
      );
      console.log(response.data);
      setFormData({
        name: "",
        des: "",
        c_date: new Date(),
        u_date: new Date(),
        id_creator: null,/*later try to catch the actuel user id */
        id_deletor: null,
      });
      setErrorMessage("Bravo, you just add a new category");
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while creating the product.");
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
        <div class="col-lg-12"><h1>Create a category</h1></div>
        <div class="adminForm">
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
      
    </div>
    </div>
    <div class="col-lg-12">
      <button class="btn">Click here to return to <Link to="/admin/Category">Category</Link></button><br></br><br></br>
      </div></section>
  );
}

export default CreateCatForm;
