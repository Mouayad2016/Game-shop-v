import React from 'react'

const Banner = () => {
return (
    <div>
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
    <div class="scroll-down scroll-to-section"><a href="#about"><i class="fa fa-arrow-down"></i></a></div></div>
);
};

export default Banner