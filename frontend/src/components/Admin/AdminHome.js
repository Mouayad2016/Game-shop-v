import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const AdminHome = () => {
    return (
      <div class="adminHome">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
                <button class="btn"><i class="fa-solid fa-home"> Home</i></button>
            </div>
            <div class="col">
              <button class="btn"><Link to="/admin/products"><i class="fa-solid fa-gamepad"> Products</i></Link></button>
            </div>
            <div class="col">
              <button class="btn"><i class="fa-solid fa-user"> Profil</i></button>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button class="btn"><i class="fa-solid fa-rectangle-list"> Categories</i></button>
            </div>
            <div class="col">
              <button class="btn"><i class="fa-solid fa-user-group"> Admins</i></button>
            </div>
            <div class="col">
              <button class="btn"><Link to="/admin/review"><i class="fa-solid fa-star"> Reviews</i></Link></button>
            </div>
          </div>
        </div>
      </div>
    );
};
    
export default AdminHome