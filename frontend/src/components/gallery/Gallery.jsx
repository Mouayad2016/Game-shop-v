import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../helper/axios";
import ItemButtons from "./compnents/itemButtons";
import "./gallery.css";
const Gallery = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
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
    console.log(categories); // Add this line to console log the categories
    setCategoryData(categories);
  };

  const fechCatProd = async (categoryId) => {
    setLoading(true);
    try {
      const productResponse = await getData({
        url: `/products/${categoryId}/get`,
      });
      const products = productResponse.data.map((product) => {
        let images = [];
        if (product.images && product.images.length > 0) {
          images = product.images.map((image) => {
            return image;
          });
        }
        return {
          id: product.id,
          name: product.name,
          des: product.description,
          is_deleted: product.is_deleted,
          images: images,
        };
      });
      console.log(products);
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
      const products = productResponse.data.map((product) => {
        let images = [];
        if (product.images && product.images.length > 0) {
          images = product.images.map((image) => {
            return image;
          });
        }
        return {
          id: product.id,
          name: product.name,
          des: product.description,
          is_deleted: product.is_deleted,
          images: images,
        };
      });
      console.log(products); // add this line to check the image URLs

      setProductData(products);
      // productData.map((e) => {
      //   console.log(e.id);
      // });
    } catch (e) {
      console.log("Error fetching products:", e);
    }
    setLoading(false);
  };

  const loadCatProd = async (categoryId) => {
    setLoading(true);
    try {
      const productResponse = await getData({
        url: `/products/${categoryId}/get?offset=${productData.length}`,
      });
      const products = productResponse.data.map((product) => {
        let images = [];
        if (product.images && product.images.length > 0) {
          images = product.images.map((image) => {
            return image;
          });
        }
        return {
          id: product.id,
          name: product.name,
          des: product.description,
          is_deleted: product.is_deleted,
          images: images,
        };
      });
      console.log(products);
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
      const products = productResponse.data.map((product) => {
        let images = [];
        if (product.images && product.images.length > 0) {
          images = product.images.map((image) => {
            return image;
          });
        }
        return {
          id: product.id,
          name: product.name,
          des: product.description,
          is_deleted: product.is_deleted,
          images: images,
        };
      });
      console.log(products);
      setProductData([...productData, ...products]);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const handleCategoryClick = (categoryId) => {
    console.log("categoryId:", categoryId);
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
    console.log("Load Data:", car_id);
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
                  <li class="desactive" onClick={() => fetchAllProduct()}>
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
                    productData
                      .filter((product) => {
                        return product.is_deleted ? null : product;
                      })
                      .map((product) => (
                        <div
                          key={product.id}
                          class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all des"
                        >
                          <div class="item">
                            <a
                              href={
                                product.images &&
                                product.images.length > 0 &&
                                `http://localhost:8000/product_image/get/name?imgName=${product.images[0]}`
                              }
                              data-lightbox={product.id}
                              data-title={`<h2>${product.name}</h2><br />
                          <p><Truncate maxWidth={50} inline title="branch-name-that-is-really-long">${product.des}</Truncate></p>`}
                            >
                              {product &&
                              product.images &&
                              product.images.length > 0 ? (
                                <img
                                  src={`http://localhost:8000/product_image/get/name?imgName=${product.images[0]}`}
                                  alt={product.name}
                                  style={{ width: "200px", height: "200px" }}
                                  className="product-image"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src =
                                      "http://localhost:3000/assets/images/project-item-02.jpg";
                                  }}
                                />
                              ) : (
                                <img
                                  src="http://localhost:3000/assets/images/project-item-02.jpg"
                                  alt={product.name}
                                  className="product-image"
                                />
                              )}
                            </a>
                            {<ItemButtons prod_id={product.id} />}
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
