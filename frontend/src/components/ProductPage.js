import React, { useState, useEffect } from 'react';
import { useParams, useLocation} from 'react-router-dom';
import axios from "axios";

const ProductPage = () => {
  const location = useLocation()
  const { id } = location.state
  const idd =id;
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetchAllProdData();
  }, []);
  const fetchAllProdData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products/get");
      const prod = response.data.map((prod) => ({
        id: prod.id,
        name: prod.name,
        des: prod.description,
        stock: prod.stock,
      }));
      setProductData(prod);
    } catch (e) {
      console.log(e);
    }
  };
return (
    <div>

    <section class="section" id="projects">
      <div class="container">
        <h2> About this product </h2>
        <div class="row">
            <div class="col-lg-9">
                <div class="filters-content">
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
            </div></div></div></div></div>
            {productData.filter((e) =>{
              return e.id === idd ? e : null;
            }).map((e) => (
          
            
            <div class="col-lg-3">    
                <div class="section-heading">
                  <br/>
                    <h6>About this product {e.id}</h6>
                    <h2>{e.name}</h2>
                    <br></br>
                    <h3>{e.des}</h3>
                    <br></br>
                    <p>How much this cost 350 SEK</p>
                    <br></br>
                    <fieldset>
                      <button type="submit" id="form-submit" class="main-button-icon">Add to chart<i class="fa fa-arrow-right"></i></button>
                    </fieldset>
                </div> 
            <br/><br/>
        </div>))}
      </div></div>
    </section>
</div>
);
};

export default ProductPage