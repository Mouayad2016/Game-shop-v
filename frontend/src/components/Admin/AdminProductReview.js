import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useLocation} from 'react-router-dom';
import './Admin.css';
import axios from "axios";


const AdminProducts = () => {
    const [productData, setProductData] = useState([]);
    const [reviewData, setReviewData] = useState([]);

  const location = useLocation()
  const { id } = location.state
  const idd =id;

  useEffect(() => {
    fetchAllProdData();
    fetchAllReviewData();
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
  }
  const fetchAllReviewData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/review/get");
      const rev = response.data.map((rev) => ({
        id: rev.id,
        rate: rev.rating,
        feedb: rev.feedback,
        hidden: rev.hidden,
        reported: rev.reported,
        creat: rev.created_at,
        update: rev.updated_at,
        prod_id: rev.prod_id,
        user_id: rev.user_id,
      }));
      setReviewData(rev);
    } catch (r) {
      console.log(r);
    }
  };
    return (
      <div class="adminProducts">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
            {productData.filter((e) =>{
              return e.id === idd ? e : null;
            }).map((e) => (
              <h3>All review about {e.name}</h3>
            ))}
            </div>
          </div>
            <div class="table-responsive">
                <table class="table table-bordeless">
                    <thead>
                    
                        <tr class="bg-light">
                            <th width="5%">#</th>
                            <th width="5%">Rate</th>
                            <th width="45%">Feedback</th>
                            <th width="10%">Hidden</th>
                            <th width="10%">Repported</th>
                            <th width="10%">Creation date</th>
                            <th width="10%">Last Update</th>
                            <th width="5%">User</th>
                        </tr>
                    </thead>
                    <tbody>
                    {reviewData.filter((r) =>{
              return r.prod_id === idd ? r : null;
            }).map((r) => (
                        <tr>
                            <td>{r.id}</td>
                            <td>{r.rate}/5</td>
                            <td>{r.feedb}</td>
                            <td>{r.hidden === true ? "true": "false"}</td>
                            <td>{r.reported === true ? "true": "false"}</td>
                            <td>{r.creat}</td>
                            <td>{r.update}</td>
                            <td>{r.user_id}</td>
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