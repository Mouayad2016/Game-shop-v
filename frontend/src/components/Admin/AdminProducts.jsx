import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import { getData } from "./../helper/axios";
import { axios } from "axios";

const AdminProducts = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchAllProduct();
  }, []);

  const fetchAllProduct = async () => {
    setLoading(true);
    try {
      const productResponse = await getData({ url: "/products/get" });

      const products = productResponse.data.map((products) => ({
        id: products.id,
        name: products.name,
        des: products.description,
        stock: products.stock,
        price: products.price,
        is_deleted : products.is_deleted,
      }));
      setProductData(products);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  const loadAllProd = async () => {
    setLoading(true);
    try {
      const productResponse = await getData({
        url: `/products/get?offset=${productData.length}`,
      });
      const products = productResponse.data.map((products) => ({
        id: products.id,
        name: products.name,
        des: products.description,
        stock: products.stock,
        price: products.price,
        is_deleted : products.is_deleted,
      }));
      setProductData([...productData, ...products]);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const loadData = () => {
      loadAllProd();
  };
  const [formData, setFormData] = useState({
    id_deletor: "1",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const deleteproduct = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/products/${event}/update`,
        formData
      );
      console.log(response.data);
      setFormData({
        id_deletor: "1",
      });
      setErrorMessage("");
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while creating the product.");
    }
  };
  return (
    <div class="adminProducts">
      
      <div class="container-fluid">
        <h1>Products</h1>
      <div class="col-lg-12">
      <button class="btn">Click here to <Link to="/admin/ProductCreate">Create Product</Link></button><br></br><br></br>
      </div>
      <div class="col-lg-12">
        <div class="table-responsive">
          <table class="table table-bordeless">
            <thead>
              <tr class="bg-light">
                <th width="5%"> # </th> <th width="20%"> Name </th>{" "}
                <th width="10%"> Stock </th> <th width="10%"> Category </th>{" "}
                <th width="20%"> Price </th> <th width="10%"> Is deleted </th> <th width="20%"> Reviews </th> <th width="20%">Modify</th><th width="20%">Delete</th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {loading ? (
                    <div>Loading...</div>
                  ) : (
              productData.map((e) => (
                <tr>
                  <td> {e.id} </td> <td> {e.name} </td> <td> {e.stock} </td>{" "}
                  <td> {e.cat} </td> <td> {e.price} </td> <td> {e.is_deleted ? "yes" : "no"} </td>{" "}
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
                  <td>{e.deleted_by_admin_id === "1" ?("deleted") : ("Not working")/*<button class="btn" className="alert alert-danger"onClick={deleteproduct(e.id)}>Delete</button>*/}</td>
                </tr>
              )))}{" "}
            </tbody>{" "}
          </table>{" "}
          <div class="text-center">
                  <button class="main-button-icon" onClick={loadData}>
                    Show more
                  </button>
                </div>
        </div>{" "}
      </div>{" "}
    </div>
    </div>
  );
};

export default AdminProducts;
