import React, { useState, useEffect } from "react";
import "./formStyle.css";
import axios from "axios";
function CreateProductForm() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await axios.get("http://localhost:8000/category/get");
      setCategories(response.data);
    }
    fetchCategories();
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    stock: 0,
    price: 0,
    prod_category: [],
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/products/post",
        formData
      );
      console.log(response.data);
      setFormData({
        name: "",
        description: "",
        stock: 0,
        price: 0,
        prod_category: [],
      });
      setErrorMessage("");
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

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      prod_category: [...formData.prod_category, value],
    });
  };

  const handleRemoveCategory = (category) => {
    setFormData({
      ...formData,
      prod_category: formData.prod_category.filter((c) => c !== category),
    });
  };

  return (
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
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categories">Categories</label>
          <select
            className="form-control"
            id="categories"
            onChange={handleCategoryChange}
          >
            <option value="">-- Select a category --</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {formData.prod_category.length > 0 && (
            <div className="selected-categories">
              {formData.prod_category.map((category) => (
                <span key={category} className="selected-category">
                  123
                  <button
                    type="button"
                    className="close"
                    aria-label="Remove category"
                    onClick={() => handleRemoveCategory(category)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
    </div>
  );
}

export default CreateProductForm;
