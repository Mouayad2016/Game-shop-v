import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation} from 'react-router-dom';

function CreateCatForm() {
    const location = useLocation()
    const { id } = location.state
    const idd =id;

  const [formData, setFormData] = useState({
    name: "",
    des: "",
    c_date: "",
    u_date: new Date(),
    id_creator: null,/*later try to catch the actuel user id */
    id_deletor: null,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/category/${idd}/update`,
        formData
      );
      console.log(response.data);
      setFormData({
        name: "",
        des: "",
        c_date: "",
        u_date: new Date(),
        id_creator: null,/*later try to catch the actuel user id */
        id_deletor: null,
      });
      setErrorMessage("Bravo, you just change a category");
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while modifying the product.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [catData, setCatData] = useState([]);
  useEffect(() => {
    fetchAllCatData(); 
  }, []);
  const fetchAllCatData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/category/get");
      const prod = response.data.map((prod) => ({
        id: prod.id,
        name: prod.name,
        des: prod.description,
        c_date: prod.created_at,
        u_date: prod.updated_at,
        id_creator: prod.creator_admin_id,
        id_deletor: prod.deleted_by_admin_id
      }));
      setCatData(prod);
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <section>
        <div class="col-lg-12"><h1>Modify category number {idd}</h1></div>
    <div class="adminForm">
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        {catData.filter((e) =>{
              return e.id === idd ? e : null;
            }).map((e) => (
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder={e.name}
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>))}
        {catData.filter((e) =>{
              return e.id === idd ? e : null;
            }).map((e) => (
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            placeholder={e.des}
            value={e.description}
            onChange={handleInputChange}
          />
        </div>))}
        <button type="submit" className="btn btn-primary">
          Modify
        </button>
      </form>
      
    </div>
    </div>
    <div class="col-lg-12">
      <button class="btn">Click hete to return to <Link to="/admin/Category">Category</Link></button><br></br><br></br>
      </div></section>
  );
}

export default CreateCatForm;
 