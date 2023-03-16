import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from "axios";
import { getCookieValue } from "../helper/cookies";

const ProductPage = () => {
  const [fId, setId] = useState();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const user_id = searchParams.get("id");

    if (user_id) {
      document.cookie = `user_id=${user_id}; path=/;`;
    }

    setId(getCookieValue("user_id"));
    console.log(fId);
    console.log(searchParams);
  });

  const location = useLocation()
  const { id } = location.state
  const idd = id;
  let prodname = "";
  const [productData, setProductData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");


  useEffect(() => {
    fetchAllProdData();
    fetchAllReviewData();
    fetchNameData();
  }, []);

  const fetchAllProdData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/products/get/${idd}`);
      const prod = response.data;
      setProductData(prod);
    } catch (e) {
      console.log(e);
    }
  };

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
        user_id: rev.user_id
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
      prod_id: idd,
      rating,
      feedback
    };
  
    try {
      const response = await axios.post("http://localhost:8000/review/add", review)
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
    if (!fId) {
      alert("Please log in to add this product to favorites");
      return;
    }

    const response = await axios.post(`http://127.0.0.1:8000/favorite_product/post/${fId}/${productData.id}`);
    console.log("Product added to favorites: ", response.data);
  }

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
                            <a href={"assets/images/project-item-0"+idd+".jpg"} data-lightbox="image-A" data-title="Our Projects"><img src={"assets/images/project-item-0"+idd+".jpg"} alt=""/></a>
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
          
            <div class="col-lg-3">    
                <div class="section-heading">
                  <br/>
                    <h6>About this product {productData.id}</h6>
                    <h2>{productData.name}</h2>
                    <br></br>
                    <p>Only {productData.price} SEK and {productData.stock} product left.</p>
                    <br></br>
                    <fieldset>
                      <button onClick={addToFavorites}>Add to favorites</button>
                    </fieldset>
                    <br></br>
                    <fieldset>
                      <button
                      onClick={
                        ()=>{
                          {fId ? (
                          axios.post(`http://127.0.0.1:8000/cart/${fId}/${productData.id}/postProduct`,productData)
                          .then( /*this one add the product to the cart*/
                            res=>{
                              console.log("--res---",res)
                            }
                          )
                          .catch(
                            e=>{
                              console.log("---e--",e)
                            }
                          )
                          ):(
                            axios.post(`http://127.0.0.1:8000/cart/null/${productData.id}/postProduct`,productData)
                          .then( /*add product to cart 1 each time so not working well*/
                            res=>{
                              console.log("--res---",res)
                            }
                          )
                          .catch(
                            e=>{
                              console.log("---e--",e)
                            }
                          )
                          )}
                        }
                      }
                      type="submit" 
                      id="form-submit" 
                      class="main-button-icon"
                      >Add to chart<i class="fa fa-arrow-right"></i></button>
                    </fieldset>
                    
                </div>{productData.description} 
        </div>
        <p>comment : need to add discount if there is some</p>
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
        {reviewData.filter((r) => r.prod === idd && !r.hidden).map((r) => (
  <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
    <div class="features-item">
      <div class="features-icon">
        <img src="assets/images/login.png" alt=""/>
      </div>
      <div class="features-content">
        {userData.filter((u) => r.user_id === u.id).map((u) => (
          <h4>{u.name} on the {r.updated}</h4>
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
    </div><br></br>
  </div>
))}
            </div>
      </div>
      </div>
    </section>
</div>

);
};

export default ProductPage