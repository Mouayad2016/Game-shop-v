import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { getCookieValue } from "../helper/cookies";

import { getData } from "../components/helper/axios";

const ProductPage = ({ prodId }) => {
  const [fId, setId] = useState();

  useEffect(() => {
    // const searchParams = new URLSearchParams(window.location.search);
    // const user_id = searchParams.get("id");

    // if (user_id) {
    //   document.cookie = `user_id=${user_id}; path=/;`;
    // }

     setId(getCookieValue("user_id"));
    fetchAllProdData();
  }, []);

  let prodname = "";
  const [productData, setProductData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [images, setImages] = useState([]);

  const fetchAllProdData = async () => {
    try {
      console.log("asdasd");
      const response = await getData({
        url: `/products/get/${prodId}`,
      });
      const prod = response.data;
      console.log(prod);
      setProductData(prod);
      setImages(prod.images);
    } catch (e) {
      console.log(e);
    }
  };

  let first = true;

  const fetchAllReviewData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/review/get");
      const rev = response.data.map((rev) => ({
        id: rev.id,
        rate: rev.rating,
        feedback: rev.feedback,
        hidden: rev.hidden,
        updated: rev.updated_at,
        prod: rev.prod_id,
        user_id: rev.user_id,
      }));
      setReviewData(rev);
    } catch (r) {
      console.log(r);
    }
  };

  const fetchNameData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user/get");
      const user = response.data.map((user) => ({
        id: user.id,
        name: user.username,
      }));
      setUserData(user);
    } catch (u) {
      console.log(u);
    }
  };

  //add review ***********************
  const addReviewHandler = async (e) => {
    e.preventDefault();

    const review = {
      prod_id: prodId,
      rating,
      feedback,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/review/add",
        review
      );
      console.log(response.data);
      // update the review data state variable
      setReviewData([...reviewData, response.data]);
      // clear the form fields
      setRating(0);
      setFeedback("");
    } catch (err) {
      console.log(err);
    }
  };

  const addToFavorites = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/favorite_product/get/product/${productData.id}`
      ); // check if product already exists on server

      if (response.status === 200) {
        const data = response.data;
        if (data.exists) {
          // product already exists, do not add again
          alert("Product already exists in favorites");
          return;
        }
      }

      // product does not exist, add to favorites
      const addResponse = await axios.post(
        `http://127.0.0.1:8000/favorite_product/post/${fId}/${productData.id}`
      );
      console.log(addResponse.data); // add this line to print the response data

      if (addResponse.status != 201) {
        console.log("Failed to add product to favorites");
        return;
      }

      alert("Product was successfully added to favorites!");
    } catch (error) {
      console.log(error);
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
                  {images
                    // .filter((image) => {
                    //   return first ? image : null, (first = false);
                    // })
                    .map((image) => (
                      <div class="col-lg-6 col-md-6 col-sm-8 col-xs-12 all des">
                        <div>
                          <a
                            href={`http://localhost:8000/${image.link}`}
                            data-lightbox="image-A"
                            data-title={productData.name}
                          >
                            <img
                              src={`http://localhost:8000/${image.link}`}
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    ))}
                  <div>
                    <div class="row grid">
                      {images.map((image) => (
                        <div class="col-lg-5 col-md-5 col-sm-7 col-xs-11 all des">
                          <div>
                            <a
                              href={`http://localhost:8000/product_image/get/name?imgName=${image}`}
                              data-lightbox="image-A"
                              data-title={productData.name}
                            >
                              <img
                                src={`http://localhost:8000/product_image/get/name?imgName=${image}`}
                                alt=""
                              />
                            </a>
                          </div>
                          <br></br>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="section-heading">
                <br />
                <h6>About this product {productData.id}</h6>
                <h2>{productData.name}</h2>
                <br></br>
                <p>
                  Only {productData.price} SEK and {productData.stock} product
                  left.
                </p>
                <br></br>
                <fieldset>
                  {fId ? (
                    <button class="main-button" onClick={addToFavorites}>
                      Add to favorites
                    </button>
                  ) : (
                    <Link to="/Logpage">
                      <button class="button">
                        <strong>Here</strong> to log-in and add this product to
                        your favorites
                      </button>
                    </Link>
                  )}
                </fieldset>
                <br></br>
                <fieldset>
                  <button
                    onClick={() => {
                      // eslint-disable-next-line no-lone-blocks
                      {
                        fId
                          ? axios
                              .post(
                                `http://127.0.0.1:8000/cart/${fId}/${productData.id}/postProduct`,
                                productData
                              )
                              .then(
                                /*this one add the product to the cart*/
                                (res) => {
                                  console.log("--res---", res);
                                }
                              )
                              .catch((e) => {
                                console.log("---e--", e);
                              })
                          : axios
                              .post(
                                `http://127.0.0.1:8000/cart/null/${productData.id}/postProduct`,
                                productData
                              )
                              .then(
                                /*add product to cart 1 each time so not working well*/
                                (res) => {
                                  console.log("--res---", res);
                                }
                              )
                              .catch((e) => {
                                console.log("---e--", e);
                              });
                      }
                    }}
                    type="submit"
                    id="form-submit"
                    class="main-button-icon"
                  >
                    Add to cart<i class="fa fa-arrow-right"></i>
                  </button>
                </fieldset>
              </div>
              {productData.description}
            </div>
            {/*<p>comment : need to add discount if there is some</p>*/}
          </div>
          {/* <container>
        <h2>Add review</h2>

        <form onSubmit={addReviewHandler}>
          <form.Group className="mb-3" controlId="rating">
            <Formlabel>
              rating
            </Formlabel>
            <Form.Control 
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            type="number"
            />
          </form.Group>
        </form>

      </container> */}
          <div class="col-lg-9">
            <div class="row">
              {reviewData
                .filter((r) => r.prod === prodId && !r.hidden)
                .map((r) => (
                  <div
                    class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                    data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s"
                  >
                    <div class="features-item">
                      <div class="features-icon">
                        <img src="assets/images/login.png" alt="" />
                      </div>
                      <div class="features-content">
                        {userData
                          .filter((u) => r.user_id === u.id)
                          .map((u) => (
                            <h4>
                              {u.name} on the {r.updated}
                            </h4>
                          ))}
                        <p>{r.feedback}</p>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <h6>{prodname}</h6>
                        <br></br>
                      </div>
                    </div>
                    <br></br>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
