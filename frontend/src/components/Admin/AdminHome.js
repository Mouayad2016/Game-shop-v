import React, { useEffect, useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Admin.css';

const AdminHome = () => {

  return (
    <div className="admin">
        <div class="adminHome">
          <h2>Welcome to your dashboard</h2>
          <p></p>
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
};
    
export default AdminHome