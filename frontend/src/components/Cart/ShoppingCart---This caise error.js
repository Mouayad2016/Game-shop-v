import React, { useState, useEffect } from "react";
import "./ShoppingCart.css";
import CartItem from "./CartItems";
import axios from "axios";
import { getCookieValue } from "../../helper/cookies";
import PayPalButton from "./paybalBotton";

function ShoppingCart() {
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

  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    fetchUserCartData();
  }, []);

  const fetchUserCartData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/cart/${fId}/get`);
      const cart = response.data.map((cart) => ({
        id: cart.id,
        /*all other info send by the backend*/
      }));
      setCartItems(cart);
    } catch (e) {
      console.log(e);
    }
  };

  const increase = (id) => {
    let index = cartItems.findIndex((item) => item.id === id);
    let tmp = [...cartItems];
    let quantity = cartItems[index].quantity;
    tmp[index].quantity = quantity + 1;
    axios.put(`http://127.0.0.1:8000/cart/${id}/update`, tmp[index]);
    /*need to know what are the link and witch data they need to work*/
    setCartItems(tmp);
  };
  const decrease = (id) => {
    let index = cartItems.findIndex((item) => item.id === id);
    let tmp = [...cartItems];
    let quantity = cartItems[index].quantity;
    if (quantity != 1) {
      axios.put(`http://127.0.0.1:8000/cart/${id}/update`, tmp[index]);
      tmp[index].quantity = quantity - 1;
      /*need to know what are the link and witch data they need to work*/
    } else {
      axios.delete(`http://127.0.0.1:8000/cart/${id}/delete`);
      tmp.splice(index, 1);
      /*need to know what are the link and witch data they need to work*/
    }
    setCartItems(tmp);
  };
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/cart/get").then((res) => {
      //add to chart need user_id,otherwise always return []
      setCartItems(res.data)
    });
  }, []);
  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    setCartItems([]);
  };

  return (
    <div className="shopping-cart">
      <h2 className="shopping-cart-header"> Shopping Cart </h2>{" "}
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {" "}
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                increase={increase}
                decrease={decrease}
              />
            ))}{" "}
          </div>{" "}
          <div className="cart-summary">
            <p className="cart-summary-text">
              Subtotal:{" "}
              <span className="cart-summary-price">
                {" "}
                $ {cartTotal.toFixed(2)}{" "}
              </span>{" "}
            </p>{" "}
            <button className="cart-summary-button" onClick={handleCheckout}>
              Checkout{" "}
            </button>{" "}
          </div>{" "}
          <p> sb - qonwa25271562 @personal.example.com </p> <p> 00000000 </p>{" "}
          <PayPalButton />
        </>
      ) : (
        <p className="empty-cart-message"> Your cart is empty. </p>
      )}{" "}
    </div>
  );
}

export default ShoppingCart;
