import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "./helper/axios";
import "./gallery.css";
const Gallery = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);
  const [loading, setLoading] = useState(false);
  var car_id;
  useEffect(() => {
    fechCat();
    fetchAllProduct();
  }, []);

  const fechCat = async () => {
    const categoryResponse = await getData({ url: "/category/get" });
    const categories = categoryResponse.data.map((category) => ({
      id: category.id,
      name: category.name,
    }));
    setCategoryData(categories);
  };

  const fechCatProd = async (categoryId) => {
    setLoading(true);
    try {
      const productResponse = await getData({
        url: `/products/${categoryId}/get`,
      });
      const products = productResponse.data.map((product) => ({
        id: product.id,
        name: product.name,
        des: product.description,
      }));
      setProductData(products);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  const fetchAllProduct = async () => {
    setLoading(true);
    try {
      const productResponse = await getData({ url: "/products/get" });

      const products = productResponse.data.map((product) => ({
        id: product.id,
        name: product.name,
        des: product.description,
      }));
      setProductData(products);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  const loadCatProd = async (categoryId) => {
    setLoading(true);
    try {
      const productResponse = await getData({
        url: `/products/${categoryId}/get?offset=${productData.length}`,
      });
      const products = productResponse.data.map((product) => ({
        id: product.id,
        name: product.name,
        des: product.description,
      }));
      setProductData([...productData, ...products]);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  const loadAllProd = async () => {
    setLoading(true);
    try {
      const productResponse = await getData({
        url: `/products/get?offset=${productData.length}`,
      });
      const products = productResponse.data.map((product) => ({
        id: product.id,
        name: product.name,
        des: product.description,
      }));
      setProductData([...productData, ...products]);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  const handleCategoryClick = (categoryId) => {
    if (categoryId) {
      car_id = categoryId;
      fechCatProd(categoryId);
    } else {
      car_id = undefined;
      fetchAllProduct();
    }
  };

  const loadData = () => {
    if (car_id) {
      loadCatProd();
    } else {
      loadAllProd();
    }
  };

  // const addProductTOShoppingCart = (prodId){

  // }
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
                  <li class="desactive" onClick={() => handleCategoryClick()}>
                    All
                  </li>
                  {categoryData.map((category) => (
                    <li
                      key={category.id}
                      data-filter=".des"
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="filters-content">
                <div class="row grid">
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    productData.map((product) => (
                      <div
                        key={product.id}
                        class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all des"
                      >
                        <div class="item">
                          <a
                            href="assets/images/project-item-02.jpg"
                            data-lightbox={product.id}
                            data-title={`<h2>${product.name}</h2><br />
                          <p><Truncate maxWidth={50} inline title="branch-name-that-is-really-long">${product.des}</Truncate></p>`}
                          >
                            <img
                              src="assets/images/project-item-02.jpg"
                              alt={product.name}
                            />
                          </a>
                          <div class="item-buttons">
                            <button class="add-to-favorite">
                              <i class="fas fa-heart"></i>
                            </button>
                            <button class="add-to-cart">
                              <i class="fas fa-shopping-cart"></i>
                            </button>
                          </div>
                          <Link
                            to="product"
                            state={{ id: product.id }}
                            class="item-name"
                          >
                            {product.name}
                          </Link>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div class="text-center">
                  <button class="main-button-icon" onClick={loadData}>
                    Show more
                  </button>
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
