import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation} from 'react-router-dom';

function CreateCatForm() {
    const location = useLocation() 
    const { id } = location.state
    const idd =id;

    const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/products/${idd}/update`
      );
      setErrorMessage("Bravo, you just delete a product");
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while deleting the product.");
    }
  };


  const [catData, setCatData] = useState([]);
  useEffect(() => {
    fetchAllCatData(); 
  }, []);
  const fetchAllCatData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products/get");
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
        <div class="col-lg-12"><h1>Delete category number {idd}</h1>Do not use it is not working fo now</div>
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
                <ul>
                  <li> ID: {e.id} </li> <br></br><li> Name: {e.name} </li><br></br> <li>Description: {e.des} </li>{" "}
                  <br></br>    <li>Creation date: {e.c_date} </li> <br></br><li>Last Update {e.u_date} </li>{" "}
                  <br></br><li>Creator ID: {e.id_creator}</li><br></br><li>Deletor ID: {e.id_deletor}</li><br></br>
                </ul>
              ))}{" "}

        <button type="submit" className="btn btn-primary">
          Delete
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
