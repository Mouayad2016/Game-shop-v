import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (categoryId) => {
    setLoading(true);
    try {
      const categoryResponse = await axios.get(
        "http://localhost:8000/category/get"
      );
      const categories = categoryResponse.data.map((category) => ({
        id: category.id,
        name: category.name,
      }));
      setCategoryData(categories);

      let productResponse;
      if (categoryId) {
        productResponse = await axios.get(
          `http://localhost:8000/products/${categoryId}/get`
        );
      } else {
        productResponse = await axios.get("http://localhost:8000/products/get");
      }
      const products = productResponse.data.map((product) => ({
        id: product.id,
        name: product.name,
        des : product.description,
      }));
      setProductData(products);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const handleCategoryClick = (categoryId) => {
    setVisibleItems(6); // reset number of visible items
    fetchData(categoryId);
  };

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
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
                  <li
                    class="desactive"
                    onClick={() => handleCategoryClick(null)}
                  >
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
                    productData.slice(0, visibleItems).map((product) => (
                      <div
                        key={product.id}
                        class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all des"
                      >
                        <div class="item">
                          <a
                            href="assets/images/project-item-02.jpg"
                            data-lightbox={product.id}
                            data-title={`<h2>${product.name}</h2><br /> <p><Truncate maxWidth={50} inline title="branch-name-that-is-really-long">${product.des}</Truncate></p>`}
                          >
                        
                            <img
                              src="assets/images/project-item-02.jpg"
                              alt=""
                            />
                          </a>
                          <br />
                          <Link
                            to="product"
                            state={{ id: product.id }}
                            class="text-button-icon"
                          >
                            More info
                          </Link>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                {visibleItems < productData.length && (
                  <div class="text-center">
                    <button class="main-button-icon" onClick={handleShowMore}>
                      Show more
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
