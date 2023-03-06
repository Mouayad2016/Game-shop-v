import React, { useState, useEffect } from 'react';
import './Admin.css';
import axios from "axios";


const AdminReview = () => {
  const [reviewData, setReviewData] = useState([]);


  useEffect(() => {
    fetchAllReviewData();
  }, []);
 
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
  const post_request = async () => {
    try{
      const resp = await axios.post("http://localhost:8000/review/post",{
        id:null, rating:4, feedback:"Very good deal and the shipping went well !", hidden: false,
        reported:false, created_at:"2023-02-25", updated_at: "2023-02-25", prod_id: 5, user_id: 1
      });
      console.log(resp.data);
  } catch (error){
    console.log(error.reponse);
  }
  };
  
    return (
      <div class="adminProducts">
        <h3>All reviews</h3>
        <div class="container-fluid">
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
                    {reviewData.map((r) => (
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
                <form onSubmit={post_request}>
                    <button
                      type="submit" 
                      id="form-submit" 
                      className="main-button-icon"
                      >Add review</button></form>
            </div>
        </div>
      </div>
    );
};
    
export default AdminReview