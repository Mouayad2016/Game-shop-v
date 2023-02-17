import React, { useState, useEffect } from 'react'
import axios from "axios";

function toSell(num){
  if(num == 1) return num;
}
const Gallery = () => {
  const [data,setData] =useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const result = await axios("https://jsonplaceholder.typicode.com/posts",);
      setData(result.data);
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
                            
                            <a href="assets/images/project-big-item-01.jpg" data-lightbox="image-1" data-title={item.title}><img src="assets/images/project-item-01.jpg" alt=""/></a>
                          </div>
                        </div>
                    ))}
                    <div class="row grid">
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all des">
                          <div class="item">
                            <a href="assets/images/project-big-item-01.jpg" data-lightbox="image-1" data-title="Our Projects"><img src="assets/images/project-item-01.jpg" alt=""/></a>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all dev">
                          <div class="item">
                            <a href="assets/images/project-big-item-02.jpg" data-lightbox="image-1" data-title="Our Projects"><img src="assets/images/project-item-02.jpg" alt=""/></a>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all gra">
                          <div class="item">
                            <a href="assets/images/project-big-item-03.jpg" data-lightbox="image-1" data-title="Our Projects"><img src="assets/images/project-item-03.jpg" alt=""/></a>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all tsh">
                          <div class="item">
                            <a href="assets/images/project-big-item-04.jpg" data-lightbox="image-1" data-title="Our Projects"><img src="assets/images/project-item-04.jpg" alt=""/></a>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all dev">
                          <div class="item">
                            <a href="assets/images/project-big-item-05.jpg" data-lightbox="image-1" data-title="Our Projects"><img src="assets/images/project-item-05.jpg" alt=""/></a>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all des">
                          <div class="item">
                            <a href="assets/images/project-big-item-06.jpg" data-lightbox="image-1" data-title="Our Projects"><img src="assets/images/project-item-06.jpg" alt=""/></a>
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