import React, { useEffect, useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Admin.css';

const AdminHome = () => {

  /*const [authenticated, setauthenticated] = useState();
  useEffect(() => {
    //const loggedInUser = localStorage.getItem("authenticated");
    if (localStorage.getItem("authenticated")) {
      setauthenticated(localStorage.getItem("authenticated"));
      console.log(authenticated);
    }
  }, []);*/

  const authenticated = localStorage.getItem("authenticated");
  console.log("authenticated = ", authenticated);

  /*ATTENTION: to log out -> delete what is in the storage - if authenticated is anything other than null, the page can load*/
  /*Ask Mouayad if this could be implemented with cookies instead of localStorage ?*/
  
  if (authenticated) {
    return (
      <div className="admin">
          <div class="adminHome">
            <h2>Welcome to your dashboard</h2>
            <div class="container-fluid">
              <div class="row">
              <div class="col">
                  <button class="btn"><i class="fa-solid fa-user"> Profil</i></button>
                </div>
                <div class="col">
                  <button class="btn"><i class="fa-solid fa-user-group"> Admins</i></button>
                </div>
                <div class="col">
                  <button class="btn"><Link to="/admin/products"><i class="fa-solid fa-gamepad"> Products</i></Link></button>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <button class="btn"><Link to="/admin/category"><i class="fa-solid fa-rectangle-list"> Categories</i></Link></button>
                </div>
                <div class="col">
                  <button class="btn"><Link to="/admin/review"><i class="fa-solid fa-star"> Reviews</i></Link></button>
                </div>
                <div class="col">
                  <button class="btn"><Link to="/admin/review"><i class="fa-solid fa-coins"> Deals</i></Link></button>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  } else {
    return (
      //<Navigate replace to="/adminlogin" />
      <h2>NOTHING TO SEE HERE</h2>
      );
  };
};
    
export default AdminHome