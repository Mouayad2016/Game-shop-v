import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { getCookieValue } from "../helper/cookies";

const Account = () => {
    const [userData, setUserData] = useState([]);

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
      },[]);

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
        <h2> Your information </h2>
        <div class="col-lg-9">
            <div class="filters-content">
              <div class="col-lg-4">
                <p><b>Name : </b>{userData.first_name} {userData.last_name}</p>
                <p>Username : {userData.username}</p>
                <p>Last login : {userData.last_login}</p>
                <p>Email  : {userData.email}</p>
                <p>Join us on the : {userData.date_joined}</p>
              </div>
            </div>
        </div>
        <h2> Your previous orders </h2>
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




  