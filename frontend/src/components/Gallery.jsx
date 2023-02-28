import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

// function toSell(num) {
//   if (num == 1) return num;
// }
const Gallery = () => {
  const [categoryData, setcategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetchCatData();
    fetchAllProdData();
  }, []);

  const fetchAllProdData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products/get");
      const prod = response.data.map((prod) => ({
        id: prod.id,
        name: prod.name,
      }));
      setProductData(prod);
    } catch (e) {
      console.log(e);
    }
  };
  const catid = 0;
  const fetchProductByCategoryID = async () => {
     try {
       const response = await axios.get("http://localhost:8000/products/get");
       const prod = response.data.map((prod) => ({
         id: prod.id,
         name: prod.name,
       }));
      setProductData(prod);
     } catch (e) {
       console.log(e);
     }
  };
  const fetchCatData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/category/get");
      const categories = response.data.map((category) => ({
        id: category.id,
        name: category.name,
      }));
      setcategoryData(categories);
    } catch (e) {
      console.log(e);
    }
  };
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
                  <li class="desactive" data-filter="*" onClick={fetchAllProdData}>
                    All
                  </li>
                  {categoryData.map((e) => (
                    <li data-filter=".des" onCLick="">{e.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="filters-content">
                <div class="row grid">
                  <div class="row grid">
                    {productData.map((e) => (
                      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all des">
                        <div class="item">
                          <a
                            href="assets/images/project-item-02.jpg"
                            data-lightbox={e.id}
                            data-title={e.name+"<br></br> Product id :"+e.id+" "}
                          ><img  src="assets/images/project-item-02.jpg" alt=""/>
                          </a>
                          <br></br>
                          <Link to="product" state={{id : e.id}} class="text-button-icon">Show more</Link>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
