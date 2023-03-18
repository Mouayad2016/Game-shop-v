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
                <button class="btn"><Link to="/admin/profile"><i class="fa-solid fa-user"> Profil</i></Link></button>
              </div>
              <div class="col">
                <button class="btn"><Link to="/admin/admin"><i class="fa-solid fa-user-group"> Admins</i></Link></button>
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
                <button class="btn"><Link to="/admin/discount"><i class="fa-solid fa-coins"> Discount</i></Link></button>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <button class="btn"><Link to="/admin/customers"><i class="fa-solid fa-rectangle-list"> Customers</i></Link></button>
              </div>
              <div class="col">
              </div>
              <div class="col">
                <button class="btn"><Link to="/admin/order"><i class="fa-solid fa-coins"> Orders</i></Link></button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
    
export default AdminHome