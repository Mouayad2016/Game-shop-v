import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import axios from "axios";
import CreateProductForm from "./createProductForm/createPrdForm";

const AdminProducts = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetchAllProdData();
  }, []);
  const fetchAllProdData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products/get");
      const prod = response.data.map((prod) => ({
        id: prod.id,
        name: prod.name,
        des: prod.description,
        stock: prod.stock,
        price: prod.price,
      }));
      setProductData(prod);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div class="adminProducts">
      
      <div class="container-fluid">
        <h1>Products</h1>
      <div class="col-lg-12">
      <button class="btn">Click hete to <Link to="/admin/ProductCreate">Create Product</Link></button><br></br><br></br>
      </div>
      <div class="col-lg-12">
        <div class="table-responsive">
          <table class="table table-bordeless">
            <thead>
              <tr class="bg-light">
                <th width="5%"> # </th> <th width="20%"> Name </th>{" "}
                <th width="10%"> Stock </th> <th width="10%"> Category </th>{" "}
                <th width="20%"> Price </th> <th width="20%"> Reviews </th> <th width="20%">Modify</th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {productData.map((e) => (
                <tr>
                  <td> {e.id} </td> <td> {e.name} </td> <td> {e.stock} </td>{" "}
                  <td> {e.cat} </td> <td> {e.price} </td>{" "}
                  <td>
                    {" "}
                    <Link
                      to="/admin/productsreview"
                      state={{ id: e.id }}
                      class="text-button-icon"
                    >
                      All reviews{" "}
                    </Link>{" "}
                  </td>{" "}
                  {/* all reviexs for that product*/}{" "}
                  <td><Link to="/admin/ProductModify" state={{ id: e.id }}>Modify Product</Link></td>
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
