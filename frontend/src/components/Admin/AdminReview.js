import React, { useState, useEffect } from 'react';
import './Admin.css';
import axios from "axios";

function AdminReview() {
  const [productId, setProductId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
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

  const handleProductChange = (event) => {
    setProductId(event.target.value);
  };

  const handleRemove = async (id) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/review/${id}/delete`
      );
      setErrorMessage("Bravo, you just delete a category");
      fetchAllReviewData();
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while deleting the product.");
    }
  };


  const toggleHidden = async (id) => {
    const updatedReviewData = reviewData.map((r) => {
      if (r.id === id) {
        const updatedReview = { ...r, hidden: !r.hidden };
        axios.put(`http://localhost:8000/review/${id}/update`, updatedReview);
        return updatedReview;
      }
      return r;
    });
    setReviewData(updatedReviewData);
  };

  const filteredReviewData = productId
    ? reviewData.filter((r) => r.prod_id === productId)
    : reviewData;
  

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
                <th width="5%">Action</th>
              </tr>
            </thead>
            <tbody>
              {reviewData.map((r) => (
                <tr>
                            <td>{r.id}</td>
                            <td>{r.rate}/5</td>
                            <td>{r.feedb}</td>
                            <td>
                            <button
                              onClick={() => {toggleHidden(r.id)}} className={`btn ${r.hidden ? "btn-primary" : "btn-secondary"}`}
                              >
                              {r.hidden ? "True" : "False"}
                            </button>
                            </td>
                            <td>{r.reported === true ? "true": "false"}</td>
                            <td>{r.creat}</td>
                            <td>{r.update}</td>
                            <td>{r.user_id}</td>
                            <td>
                              <button onClick={() => { handleRemove(r.id) }} className="btn btn-danger">Remove</button>
                            </td>
                        </tr>
                      ))}
          
                    
                    </tbody>
                </table>
                
            </div>
        </div>
      </div>
    );
};

    
export default AdminReview