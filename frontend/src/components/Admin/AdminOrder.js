import React, { useState, useEffect } from 'react';
import './Admin.css';
import axios from "axios";

function AdminOrder() {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    fetchAllOrderData();
  }, []);

  const fetchAllOrderData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/order/get`);
      const order = response.data.map((order)=>({
        order_id : order.id,
        payment_way : order.payment_way,
        discount: order.discount_code,
        created_at: order.created_at,
        user_id : order.user_id,
      }));
      setOrderData(order);
    } catch (e) {
      console.log("error =",e);
    }
  };

  return (
    <section>
    <div class="adminProducts">
      <h3>All orders</h3>
      <div class="container-fluid">
        <div class="table-responsive">
          <table class="table table-bordeless">
            <thead>
              <tr class="bg-light">
                <th width="10%">Order Id</th>
                <th width="25%">User Id</th>
                <th width="25%">Payement way</th>
                <th width="25%">Discount</th>
                <th width="25%">Creation date</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((r) => (
                <tr>
                            <td>{r.order_id}</td>
                            <td>{r.user_id}</td>
                            <td>{r.payment_way}</td>
                            <td>{r.discount}</td>
                            <td>{r.created_at}</td>
                        </tr>
                      ))}
          
                    
                    </tbody>
                </table>
                
            </div>
        </div>
      </div>
    </section>
    );
};

    
export default AdminOrder