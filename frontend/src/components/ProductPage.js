import React, { useState, useEffect } from 'react'
import axios from "axios";

function toSell(num){
  if(num == 1) return num;
}
const ProductPage = () => {
  const [data,setData] =useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const result = await axios("http://127.0.0.1:8000/category",);
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
                    <h6>About this product</h6>
                    <h2>Call of duty</h2>
                    <br></br>
                    <h3>Very long product description</h3>
                    <br></br>
                    <p>How much this cost 350 SEK</p>
                    <br></br>
                    <p>Good looking button to add to your shopping cart</p>
                    <fieldset>
                      <button type="submit" id="form-submit" class="main-button-icon">Add to chart<i class="fa fa-arrow-right"></i></button>
                    </fieldset>
                </div>{/*}
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
                </div>{*/}
            </div>
            <div class="col-lg-9">
                <div class="filters-content">
                    {/*<div class="row grid">
                    {data.map(item =>(<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all des">
                          <div class="item">
                            
                            <a href="assets/images/project-item-01.jpg" data-lightbox="image-1" data-title={item.name}><img src="assets/images/project-item-01.jpg" alt=""/></a>
                          </div>
                        </div>
                    ))}*/}
                    <div class="row grid">
                        <div class="col-lg-6 col-md-6 col-sm-8 col-xs-12 all des">
                          <div class="item">
                            <a href="assets/images/project-item-01.jpg" data-lightbox="image-A" data-title="Our Projects"><img src="assets/images/project-item-01.jpg" alt=""/></a>
                          </div>
                        </div>
                        
                        <div class="col-lg-6 col-md-6 col-sm-8 col-xs-12 all des">
                          <div class="row grid">
                            <div class="item col-lg-4 col-md-6 col-sm-8 all">
                            <a href="assets/images/project-item-01.jpg" data-lightbox="image-A" data-title="Our Projects"><img src="assets/images/project-item-01.jpg" alt=""/></a>
                          </div>
                          <br></br>
                          <div class="item col-lg-4 col-md-6 col-sm-8 all">
                            <a href="assets/images/project-item-01.jpg" data-lightbox="image-A" data-title="Our Projects"><img src="assets/images/project-item-01.jpg" alt=""/></a>
                          </div>
                          <br></br>
                          <div class="item col-lg-4 col-md-6 col-sm-8 all">
                            <a href="assets/images/project-item-01.jpg" data-lightbox="image-A" data-title="Our Projects"><img src="assets/images/project-item-01.jpg" alt=""/></a>
                          </div>
                          <br></br>
                          <div class="item col-lg-4 col-md-6 col-sm-8 all">
                            <a href="assets/images/project-item-01.jpg" data-lightbox="image-A" data-title="Our Projects"><img src="assets/images/project-item-01.jpg" alt=""/></a>
                          </div>
                          <br></br>
                          <div class="item col-lg-4 col-md-6 col-sm-8 all">
                            <a href="assets/images/project-item-01.jpg" data-lightbox="image-A" data-title="Our Projects"><img src="assets/images/project-item-01.jpg" alt=""/></a>
                          </div>
            </div></div></div></div>
        </div>
      </div></div>
    </section>
</div>
);
};

export default ProductPage