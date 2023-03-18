import React, { useState, useEffect} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Admin.css';


const AdminHeader = () => {

    const navigate = useNavigate();

    const [authenticated, setauthenticated] = useState(sessionStorage.getItem("authenticated"));
    console.log("authenticated = ", authenticated);

    const handleLogout = (event) => {
        event.preventDefault()
        if (authenticated != null) {
            setauthenticated(null)
            sessionStorage.removeItem("authenticated");
            navigate("/adminlogin", {replace: true});
        }
    };

    if (authenticated === 'true') {
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
                                    <li class="scroll-to-section"><Link to="/admin/products">Products</Link></li> {/*here you call the page you want */}
                                    <li class="scroll-to-section"><Link to="/admin/discount">Discount</Link></li>
                                    <li class="scroll-to-section"><Link to="/admin/category">Categories</Link></li>
                                    <li class="scroll-to-section"><Link to="/admin/review">Reviews</Link></li>
                                    <li class="scroll-to-section"><Link to="/admin/customers">Customers</Link></li>
                                    <li class="scroll-to-section"><Link to="/admin/order">Orders</Link></li>
                                    <li class="scroll-to-section"><Link to="/admin/admin">Admin</Link></li>
                                    <li class="scroll-to-section"><Link to="/admin/profile">Profile</Link></li>
                                    <li class="scroll-to-section">
                                    <button class="btn" onClick={handleLogout} data-toggle="tooltip" data-placement="bottom" title="Log Out"><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
                                    </li>
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
    } else {
        return (
            <div className='adminHeader'>
                <Navigate replace to="/adminlogin"/>
            </div>
            
        )
    }
};

export default AdminHeader