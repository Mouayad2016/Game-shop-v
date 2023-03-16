import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { getCookieValue } from "../helper/cookies";

const Account = () => {
    const [userData, setUserData] = useState([]);
    const [orderData, setOrderData] = useState([]);

    const [fID, setFID] = useState();
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const user_id = searchParams.get("id");

        if (user_id) {
        document.cookie = `user_id=${user_id}; path=/;`;
        }

        setFID(getCookieValue("user_id"));
        console.log("FID=",fID);
        console.log("SearchParms=",searchParams);
    });
    const id=getCookieValue("user_id");
    console.log("my user id =", id);

    useEffect(() => {
        fetchUserdata();
        fetchOrderData();
      },[]);

      const fetchOrderData = async () => {
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
      const fetchUserdata = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/user/${id}`);
          const user = response.data;
          setUserData(user);
        } catch (e) {
          console.log("error =",e);
        }
      };

    return (
 
<section class="section" id="projects">
{fID ? (
    <div class="container">
        <h2> Your personal information </h2>
        <div class="table-responsive">
                <table class="table table-bordeless">
                    <thead>
                      <br></br>
                    </thead>
                    <tbody>
                      <tr>
                      <td>Name : </td>
                      <td>{userData.first_name} {userData.last_name}</td>
                    </tr>
                    <tr>
                      <td>Username : </td>
                      <td>{userData.username}</td>
                    </tr>
                    <tr>
                      <td>Last login : </td>
                      <td>{userData.last_login} need to find a way to change the way of showing the date </td>
                    </tr>
                    <tr>
                      <td>Email  :</td>
                      <td>{userData.email}</td>
                    </tr>
                    <tr>
                      <td>Join us on the : </td>
                      <td>{userData.date_joined}</td>
                    </tr>
                    </tbody>
                </table>
                </div>
        <h2> Your previous orders </h2>
        <br></br><br></br>
        <div class="row">
          
          {orderData/*.filter((e) => e.user_id === id ? e : null)*/.map((e) =>(
          
            <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <h5> Order number : {e.order_id}</h5>
              <div class="table-responsive">
                <table class="table table-bordeless">
                    <thead>
                      <br></br>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Username : </td>
                      <td>{userData.username}</td>
                    </tr>
                    <tr>
                      <td>Discount : </td>
                      <td>{e.discount}</td>
                    </tr>
                    <tr>
                      <td>Payement way: </td>
                      <td>{e.payment_way}</td>
                    </tr>
                    </tbody>
                </table>
                </div>
          </div>
         
        ))}
        </div>
    </div>              
                
    

    
    ) : (
    <div class="container">
        <div class="col-lg-9">
      <h2>You are not log in. Please go<Link to="/"> Home </Link></h2>
      <br></br>
      <br></br>
        </div>
    </div>
    )}
                        
</section>      
);
};

export default Account;




  