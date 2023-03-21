import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Admin.css';
import axios from "axios";

const AdminDiscount = () => {
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
      }));
      setDiscountData(discount);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="adminDiscount">
      <div className="container-fluid">
        <h1>Product Discount</h1>
        <div class="col-lg-12">   
          <button class="btn">Click here to <Link to="/admin/createDiscount">Create a Discount</Link></button><br></br><br></br>
        </div>
        <br />
        <br />
      </div>
      <div className="col-lg-12">
        <div className="table-responsive">
          <table className="table table-borderless">
            <thead>
              <tr className="bg-light">
                <th width="5%"> ID </th>
                <th width="20%"> Start date </th>
                <th width="20%"> End date </th>
                <th width="20%"> Title </th>
                <th width="20%"> Discount type </th>
                <th width="20%"> rate </th>
                <th width="20%"> code </th>
                <th width="20%"> Admin ID </th>
                <th width="20%"> Delete </th>
              </tr>
            </thead>
            <tbody>
              {discountData.map((e) => (
                <tr>
                  <td>{e.id}</td>
                  <td>{e.start_date}</td>
                  <td>{e.end_date}</td>
                  <td>{e.title}</td>
                  <td>{e.discount_type}</td>
                  <td>{e.rate}</td>
                  <td>{e.code}</td>
                  <td>{e.admin_id}</td>
                  <td><Link to="/admin/DeleteDiscount" className="alert alert-danger" state={{ id: e.id }}>Delete</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AdminDiscount