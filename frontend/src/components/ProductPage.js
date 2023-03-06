import React, { useState, useEffect } from 'react';
import { useParams, useLocation} from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import axios from "axios";
/**/
const ProductPage = () => {
  const location = useLocation()
  const { id } = location.state
  const idd =id;
  let prodname= "";
  const [productData, setProductData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetchAllProdData();
    fetchAllReviewData();
    fetchNameData();
  }, []);
  const fetchAllProdData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products/get");
      const prod = response.data.map((prod) => ({
        id: prod.id,
        name: prod.name,
        des: prod.description,
        stock: prod.stock,
        price : prod.price,
      }));
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
            {productData.filter((e) =>{
              return e.id === idd ? e : null;
            }).map((e) => (
          
            prodname = e.name,
            <div class="col-lg-3">    
                <div class="section-heading">
                  <br/>
                    <h6>About this product {e.id}</h6>
                    <h2>{e.name}</h2>
                    <br></br>
                    <p>Only {e.price} SEK and {e.stock} product left.</p>
                    <br></br>
                    <fieldset>
                      <button
                      onClick={
                        //needd user_id
                        ()=>{
                          axios.post('http://127.0.0.1:8000/cart/post',...productData.filter((e) =>{
                            return e.id === idd ? e : null;
                            
                          }))
                          .then(
                            res=>{
                              console.log("--res---",res)
                            }
                          )
                          .catch(
                            e=>{
                              console.log("---e--",e)
                            }
                          )
                          console.log(productData.filter((e) =>{
                            return e.id === idd ? e : null;
                          }))
                        }
                      }
                      type="submit" 
                      id="form-submit" 
                      class="main-button-icon"
                      >Add to chart<i class="fa fa-arrow-right"></i></button>
                    </fieldset>
                    
                </div>{e.des} 
        </div>
        ))}
      </div>
      <div class="col-lg-9">
        <div class="row">
      {reviewData.filter((r) =>{
              return r.prod === idd ? r : null;
            }).map((r) => (
              <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
                    <div class="features-item">
                        <div class="features-icon">
                          <img src="assets/images/login.png" alt=""/>
                        </div>
                        <div class="features-content">
                        {userData.filter((u) =>{
                          return r.user_id === u.id ? u : null;
                        }).map((u) => (
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
                </div>))}
            </div>
      </div>
      </div>
    </section>
</div>
);
};

export default ProductPage