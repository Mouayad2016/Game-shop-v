import React, { useState, useEffect } from 'react'
import axios from "axios";

function toSell(num){
  if(num == 1) return num;
}
const Gallery = () => {
  const [data,setData] =useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const result = await axios("http://127.0.0.1:8000/category/get",);
      setData(result.data); {/*"https://jsonplaceholder.typicode.com/posts" */}
      console.log("updated");
    };
    fetchData();
    console.log("Mounted");
  },[])
return (
    <div>

    <section class="section" id="projects">
      <div class="container">
        <div class="row">
        <div class="col-lg-3">
                <div class="section-heading">
                    <h6>Our Games</h6>
                    <h2>Some of our latest games</h2>
                </div>
                <div class="filters">
                    <ul>
                        <li class="active" data-filter="*">All</li>
                        <li data-filter=".des">Action</li>
                        <li data-filter=".dev">Fantasy</li>
                        <li data-filter=".gra">Sport</li>
                        <li data-filter=".tsh">Survival</li>
                        <li data-filter=".tsh">Fighting</li>
                        <li data-filter=".des">Adventure</li>
                        <li data-filter=".des">Racing</li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-9">
                <div class="filters-content">
                    <div class="row grid">
                    {data.map(item =>(<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all des">
                          <div class="item">
                            
                            <a href="assets/images/project-item-01.jpg" data-lightbox="image-1" data-title={item.name}><img src="assets/images/project-item-01.jpg" alt=""/></a>
                          </div>
                        </div>
                    ))}
                    <div class="row grid">
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all des">
                          <div class="item">
                            <a href="assets/images/project-item-01.jpg" data-lightbox="image-1" data-title="Our Projects"><img src="assets/images/project-item-01.jpg" alt=""/></a>
                          </div>                                                    {/*if here you put the same number for each image then you will be able to pass from one image to another*/}
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all dev">
                          <div class="item">
                            <a href="assets/images/project-item-02.jpg" data-lightbox="image-2" data-title="Our Projects <p>This is a short description about this acrticle<br>350 SEK</br><a href='#contact-us'>Show more</a></p>"><img src="assets/images/project-item-02.jpg" alt=""/></a>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all gra">
                          <div class="item">
                            <a href="assets/images/project-item-03.jpg" data-lightbox="image-3" data-title="Our Projects"><img src="assets/images/project-item-03.jpg" alt=""/></a>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all tsh">
                          <div class="item">
                            <a href="assets/images/project-item-04.jpg" data-lightbox="image-4" data-title="Our Projects"><img src="assets/images/project-item-04.jpg" alt=""/></a>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all dev">
                          <div class="item">
                            <a href="assets/images/project-item-05.jpg" data-lightbox="image-5" data-title="Our Projects"><img src="assets/images/project-item-05.jpg" alt=""/></a>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all des">
                          <div class="item">
                            <a href="assets/images/project-item-06.jpg" data-lightbox="image-6" data-title="Our Projects"><img src="assets/images/project-item-06.jpg" alt=""/></a>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div></div>
    </section>
</div>
);
};

export default Gallery