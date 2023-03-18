import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { getCookieValue } from "../helper/cookies";

const Account = () => {
    const [orderproductData, setOrderProductData] = useState([]);
    const [orderData, setOrderData] = useState([]);
    const [productData, setProductData] = useState([]);
    const location = useLocation()
    const { order_id } = location.state
    const idd = order_id;

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
        fetchOrderProductdata();
        fetchOrderData();
        fetchProdData();
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
      const fetchOrderProductdata = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/order_product/get/${idd}`);
          const orderproduct = response.data.map((orderproduct)=>({
            product_id: orderproduct.product_id, 
          }));
          setOrderProductData(orderproduct);
        } catch (e) {
          console.log("error =",e);
        }
      };
      const fetchProdData = async (product_id) => {
        try {
          const response = await axios.get(`http://localhost:8000/products/get/${product_id}`);
          const prod = response.data;
          setProductData(prod);
        } catch (e) {
          console.log(e);
        }
      };

    return (
 
<section class="section" id="projects">
{fID ? (
    <div class="container">
        <h2> About your order {idd} </h2>
        <br></br><p>Return to <Link to="/account">My account page</Link></p>
        <br></br>
        <div class="row">
          {orderData.filter((e) => {
            return e.user_id === parseInt(id) ? e : null;
          }).map((e) =>(
          
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h5> Order number : {e.order_id}</h5>
              <div class="table-responsive">
                <table class="table table-bordeless">
                    <thead>
                      <br></br>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Discount : </td>
                      <td>{e.discount == null ? "None" : e.discount}</td>
                    </tr>
                    <tr>
                      <td>Payement way: </td>
                      <td>{e.payment_way}</td>
                    </tr>
                    {orderproductData.map((e) =>(
                    <tr>
                       <td onClick={() => fetchProdData(e.product_id)} >Your product number : {e.product_id}</td>
                       <td><Link to="/product" state={{id : e.product_id}}>See product page</Link></td>
                    </tr> 
                    ))}
                    
                    
                    </tbody>
                </table>
                {productData ?<h5>{"Product "+productData.id+" : "+productData.name+" for "+productData.price+" sek "}</h5> : <h5>Click on the product number to see more info about that product</h5>}
                <p>Click on the product number to see more info about that product</p>{/* does not look good but a lest you have the information*/}
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




  /**/