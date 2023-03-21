import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation} from 'react-router-dom';

function CreateDisForm() {
    const location = useLocation() 
    const { id } = location.state
    const idd =id;

    const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/discount/${idd}/delete`
      );
      setErrorMessage("Bravo, you just delete a discount");
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while deleting the discount.");
    }
  };


  const [discountData, setDiscountData] = useState([]); 
    useEffect(() => {
      fetchAllDiscountdata();
    }, []);
  
    const fetchAllDiscountdata = async () => {
      try {
        const response = await axios.get("http://localhost:8000/discount/get");
        const discount = response.data.map((discount) => ({
          id: discount.id,
          start_date: discount.start_date,
          end_date: discount.end_date,
          title: discount.title,
          discount_type: discount.discount_type,
          rate: discount.rate,
          code: discount.code,
          admin_id: discount.discount_at,
          id_deletor: discount.deleted_by_admin_id
        }));
        setDiscountData(discount);
      } catch (e) {
        console.log(e);
      }
    };


  return (
    <section>
        <div class="col-lg-12"><h1>Delete discound number {idd}</h1></div>
        <div class="adminForm">
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        
              {discountData.filter((e) =>{
              return e.id === idd ? e : null;
            }).map((e) => (
                <ul>
                  <li> ID: {e.id} </li> <br></br><li> Name: {e.start_date} </li><br></br> <li>Description: {e.end_date} </li>{" "}
                  <br></br>    <li>Creation date: {e.title} </li> <br></br><li>Last Update {e.discount_type} </li>{" "}
                  <br></br><li>Creator ID: {e.rate}</li><br></br><li>Deletor ID: {e.code}</li><br></br><li>Creator ID: {e.admin_id}</li><br></br>
                </ul>
              ))}{" "}

        <button type="submit" className="btn btn-primary">
          Delete
        </button>
      </form>
    </div>
    </div>
    <div class="col-lg-12">
      <button class="btn">Click hete to return to <Link to="/admin/discount">Discount</Link></button><br></br><br></br>
      </div></section>
  );
}

export default CreateDisForm;
