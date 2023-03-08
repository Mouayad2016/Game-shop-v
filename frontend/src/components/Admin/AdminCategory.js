import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import axios from "axios";

const AdminProducts = () => {
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
    <div class="adminProducts">
      
      <div class="container-fluid">
        <h1>Products</h1>
      <div class="col-lg-12">
      <button class="btn">Click hete to <Link to="/admin/ProductCreate">Create Category</Link></button><br></br><br></br>
      </div>
      <div class="col-lg-12">
        <div class="table-responsive">
          <table class="table table-bordeless">
            <thead>
              <tr class="bg-light">
                <th width="5%"> # </th> <th width="20%"> Name </th>{" "}
                <th width="50%"> Description </th> <th width="15%"> Creation Date </th>{" "}
                <th width="10%"> Last Update </th> <th width="10%"> Creator </th> <th width="10%">Deletor</th><th>Modify</th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {catData.map((e) => (
                <tr>
                  <td> {e.id} </td> <td> {e.name} </td> <td> {e.des} </td>{" "}
                  <td> {e.c_date} </td> <td> {e.u_date} </td>{" "}
                  <td>{e.id_creator}</td><td>{e.id_deletor}</td>
                  {/* all reviexs for that product*/}{" "}
                  <td><Link to="/admin/ProductModify" state={{ id: e.id }}>Modify Category</Link></td>
                </tr>
              ))}{" "}
            </tbody>{" "}
          </table>{" "}
        </div>{" "}
      </div>{" "}
    </div>
    </div>
  );
};

export default AdminProducts;
