import React from 'react'

const Header = () => {
return (
    <div>
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">

                        <a href="index.html" class="logo">
                        <img src="assets/images/me_white.png" heigth="30" width="60" alt=""/><img src="assets/images/me_white.png" heigth="30" width="60" alt=""/> 
                        </a>
                        <ul class="nav">
                            
                            <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                            <li class="scroll-to-section"><a href="#about">About</a></li>
                            <li class="submenu">
                                <a href="javascript:;">Category</a>
                                    <ul>
                                        <li><a href=''>Action</a></li>
                                        <li><a href=''>Sport</a></li>
                                        <li><a href=''>Adventure</a></li>
                                        <li><a href=''>Single</a></li>
                                        <li><a href=''>Double</a></li>
                                    </ul>
                                    </li>
                            <li class="submenu">
                                <a href="javascript:;">Products</a>
                                <ul>
                                    <li><a href="">All</a></li>
                                    <li><a href="">New Releases</a></li>
                                    <li><a href="">Promo</a></li>
                                    <li><a href="">Top Seller</a></li>
                                    <li><a href="">Free Games</a></li>
                                    <li><a href="">Most Played</a></li>
                                    <li><a href="">Coming soon</a></li>
                                </ul>
                            </li>
                            <li class="scroll-to-section"><a href='#cart'><img src="assets/images/cart2.png" alt="" height="25"
            width="25"/></a></li>
                            <li class="scroll-to-section"><a href="#contact-us">Contact us</a></li> 
                            <div class="search-icon">
                                <a href="#search"><i class="fa fa-search"></i></a>
                            </div>
                        </ul>        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header></div>
);
};

export default Header