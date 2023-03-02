import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import axios from "axios";


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
        /*cat: prod.prod_category, not working cause this is an array*/
        name: prod.name,
        des: prod.description,
        stock: prod.stock,
        price : prod.price,
      }));
      setProductData(prod);
    } catch (e) {
      console.log(e);
    }
  };
    return (
      <div class="adminProducts">
        <div class="container-fluid">
            <div class="table-responsive">
                <table class="table table-bordeless">
                    <thead>
                    
                        <tr class="bg-light">
                            <th width="5%">#</th>
                            <th width="20%">Name</th>
                            <th width="10%">Stock</th>
                            <th width="10%">Category</th>
                            <th width="20%">Price</th>
                            <th width="20%">Reviews</th>
                        </tr>
                    </thead>
                    <tbody>
                    {productData.map((e) => (
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.stock}</td>
                            <td>{e.cat}</td>
                            <td>{e.price}</td>
                            <td><Link to="/admin/productsreview" state={{ id: e.id }} class="text-button-icon">
                            All reviews</Link></td>{/* all reviexs for that product*/}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    );
};
    
export default AdminProducts