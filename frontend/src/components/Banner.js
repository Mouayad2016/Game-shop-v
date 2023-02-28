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
          <h3>Welcome To Breezed</h3>
          <h5>New Bootstrap Template</h5>
          <br/>
          <a href="#" class="main-stroked-button">Learn More</a>
          <a href="#" class="main-filled-button">Get It Now</a>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="assets/images/banner2.jpg" alt="Second slide"/>
        <div class="carousel-caption d-none d-md-block">
          <h3>High Performance</h3>
          <h5>Robust and Speedy</h5>
          <br/>
          <a href="#" class="main-stroked-button">Learn More</a>
          <a href="#" class="main-filled-button">Get It Now</a>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="assets/images/banner3.jpg" alt="Third slide"/>
        <div class="carousel-caption d-none d-md-block">
          <h3>High Performance</h3>
          <h5>Robust and Speedy</h5>
          <br/>
          <a href="#" class="main-stroked-button">Learn More</a>
          <a href="#" class="main-filled-button">Get It Now</a>
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

{/*

<div class="main-banner header-text" id="top">
        <div class="Modern-Slider">
          <div class="item">
            <div class="img-fill">
                <img src="assets/images/slide-01.jpg" alt=""/>
                <div class="text-content">
                  <h3>Welcome To Breezed</h3>
                  <h5>New Bootstrap Template</h5>
                  <a href="#" class="main-stroked-button">Learn More</a>
                  <a href="#" class="main-filled-button">Get It Now</a>
                </div>
            </div>
          </div>
          <div class="item">
            <div class="img-fill">
                <img src="assets/images/slide-02.jpg" alt=""/>
                <div class="text-content">
                  <h3>Integrated Marketing Media</h3>
                  <h5>Best Digital Marketing</h5>
                  <a href="#" class="main-stroked-button">Read More</a>
                  <a href="#" class="main-filled-button">Take Action</a>
                </div>
            </div>
          </div>
          <div class="item">
            <div class="img-fill">
                <img src="assets/images/slide-03.jpg" alt=""/>
                <div class="text-content">
                  <h3>High Performance</h3>
                  <h5>Robust and Speedy</h5>
                  <a href="#" class="main-stroked-button">Learn More</a>
                  <a href="#" class="main-filled-button">Get It Now</a>
                </div>
            </div>
          </div>
        </div>
    </div>
    <div class="scroll-down scroll-to-section"><a href="#about"><i class="fa fa-arrow-down"></i></a></div>

 */}

 {/*
    <div className='carousel'>
      <img className='card card--activer' src="assets/images/slide-01.jpg" alt=""/>
      <div class="text-content">
        <h3>Welcome To Breezed</h3>
        <h5>New Bootstrap Template</h5>
        <a href="#" class="main-stroked-button">Learn More</a>
        <a href="#" class="main-filled-button">Get It Now</a>
      </div>

      <img className='card card--left' src="assets/images/slide-03.jpg" alt=""/>
      <div class="text-content">
        <h3>High Performance</h3>
        <h5>Robust and Speedy</h5>
        <a href="#" class="main-stroked-button">Learn More</a>
        <a href="#" class="main-filled-button">Get It Now</a>
      </div>

      <img className='card card--right' src="assets/images/slide-03.jpg" alt=""/>
      <div class="text-content">
        <h3>High Performance</h3>
        <h5>Robust and Speedy</h5>
        <a href="#" class="main-stroked-button">Learn More</a>
        <a href="#" class="main-filled-button">Get It Now</a>
      </div>
*/}