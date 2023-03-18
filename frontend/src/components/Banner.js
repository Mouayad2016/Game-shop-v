import React from 'react';
import './banner.css';
import { useState, useEffect } from 'react';

const Banner = () => {
return (

  <div id="carouselBannerControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="assets/images/banner1.jpg" alt="First slide"/>
        <div class="carousel-caption d-none d-md-block">
          <h3>Welcome To Geek</h3>
          <h5>Your new favorite game shopping website</h5>
          <br/>
          <a href="#projects" class="main-stroked-button">Learn more about our products</a>
          <a href="#" class="main-filled-button">See some reviews</a>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="assets/images/banner2.jpg" alt="Second slide"/>
        <div class="carousel-caption d-none d-md-block">
          <h3>All games you want</h3>
          <h5>Look at our categories</h5>
          <br/>
          <a href="#" class="main-stroked-button">Search</a>
          <a href="#projects" class="main-filled-button">View Products</a>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="assets/images/banner3.jpg" alt="Third slide"/>
        <div class="carousel-caption d-none d-md-block">
          <h3>Best place to found all your favorites games</h3>
          <br/>
          <a href="#projects" class="main-stroked-button">View Products</a>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselBannerControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselBannerControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  );
};

export default Banner
