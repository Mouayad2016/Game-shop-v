import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import { getData } from "../helper/axios";
import { axios } from "axios";

const AdminDiscount = () => {
  const [productData, setProductData] = useState([]);
  const [discountData, setDiscountData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllProduct();
  }, []);

  const fetchAllProduct = async () => {
    setLoading(true);
    try {
      const productResponse = await getData({ url: "http://localhost:8000/products/get" });
      const discountResponse = await getData({ url: "http://localhost:8000/discount/get" });

      const products = productResponse.data.map((product) => {
        const discountProduct = discountResponse.data.find(
          (discount) => discount.product_id === product.id
        );
        return {
          id: product.id,
          name: product.name,
          description: product.description,
          stock: product.stock,
          price: product.price,
          discountPrice: discountProduct?.discount_price ?? 0,
        };
      });
      setProductData(products);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const [formData, setFormData] = useState({
    id_deletor: "1",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const deleteProduct = async (productId) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/products/${productId}/delete`,
        formData
      );
      console.log(response.data);
      setFormData({
        id_deletor: "1",
      });
      setErrorMessage("");
      setProductData((prevData) =>
        prevData.map((product) =>
          product.id === productId ? { ...product, deleted_by_admin_id: 1 } : product
        )
      );
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while deleting the product.");
    }
  };

  return (
    <div className="adminDiscount">
      <div className="container-fluid">
        <h1>Product Discount</h1>
        <div className="col-lg-12">
          <button className="btn">
            Click here to <Link to="/admin/ProductCreate">Create Product</Link>
          </button>
          <br />
          <br />
        </div>
        <div className="col-lg-12">
          <div className="table-responsive">
            <table className="table table-bordeless">
              <thead>
                <tr className="bg-light">
                  <th width="5%"> # </th>
                  <th width="20%"> Name </th>
                  <th width="10%"> Stock </th>
                  <th width="10%"> Category </th>
                  <th width="20%"> Price </th>
                  <th width="20%"> Reviews </th>
                  <th width="20%">Delete</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  discountData.map((e) => (
                    <tr key={e.id}>
                      <td> {e.id} </td>
                      <td> {e.name} </td>
                      <td> {e.stock} </td>
                      <td> {e.cat} </td>
                      <td>
                        ${" "}
                        {e.price.toFixed(2)}{" "}
                        {e.discount && (
                          <span className="discount-price">
                            {" "}
                            ${" "}
                            {(e.price - (e.price * e.discount) / 100).toFixed(2)}{" "}
                          </span>
                        )}
                      </td>
                      <td>
                        <button
                          className="btn btn"
                          // onClick={() => handleDelete(e.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDiscount;
                             
