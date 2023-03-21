import React, { useState, useEffect } from "react";
import "./formStyle.css";
import axios from "axios";
import { useLocation} from 'react-router-dom';

function CreateProductForm() {

    const location = useLocation()
    const { id } = location.state
    const idd =id;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await axios.get("http://localhost:8000/category/get");
      setCategories(response.data);
    }
    fetchCategories();
  }, []);
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetchAllProdData();
  }, []);
  const fetchAllProdData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/products/get/${idd}`);
      const prod = response.data;
      setProductData(prod);
    } catch (e) {
      console.log(e);
    }
  };
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
      const response = await axios.put(
        `http://127.0.0.1:8000/products/${idd}/update`,
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <section>
    <div class="col-lg-12"><h1>Manage my product info</h1></div>
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
            value={productData.name}
            placeholder={productData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={productData.description}
            placeholder={productData.description}
            onChange={handleInputChange}
          />
        </div>
          <label>Current stock: {productData.stock}</label>
         <div className="form-group">
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleInputChange}
          />
        </div>
        <label>Current price: {productData.price}</label>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
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
  );
}

export default CreateProductForm;
