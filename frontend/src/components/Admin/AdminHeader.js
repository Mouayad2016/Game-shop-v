import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';


const AdminHeader = () => {
return (
  <div className='adminHeader'>
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">

                    <Link to="/admin">
                    <h1>Admin</h1>
                    </Link>

                    <ul class="nav">
                        <li class="scroll-to-section"><Link to="/admin">Home</Link></li>
                        <li class="scroll-to-section"><Link to="/admin/products">Products</Link></li> {/*here you call the page you want */}
                        <li class="scroll-to-section"><Link to="/admin/profil">Profil</Link></li>
                        <li class="scroll-to-section"><Link to="/admin/category">Categories</Link></li>
                        <li class="scroll-to-section"><Link to="/admin/review">Reviews</Link></li>
                    </ul>        
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>

                    </nav>
                </div>
            </div>
        </div>
    </header>
  </div>
  );
};

export default AdminHeader