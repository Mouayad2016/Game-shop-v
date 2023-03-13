import React, { useState, useEffect } from "react";
import "./ShoppingCart.css";
import CartItem from "./CartItems";
import axios from "axios";
import PayPalButton from "./paybalBotton";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      name: "Item 1",
      price: 1.11,
      quantity: 1,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Item 2",
      price: 2.22,
      quantity: 2,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "Item 3",
      price: 3.33,
      quantity: 3,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      name: "Item 4",
      price: 4.44,
      quantity: 4,
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      name: "Item 5",
      price: 5.55,
      quantity: 4,
    },
  ]);
  const increase = (id) => {
    let index = cartItems.findIndex((item) => item.id === id);
    let tmp = [...cartItems];
    let quantity = cartItems[index].quantity;
    tmp[index].quantity = quantity + 1;
    axios.put(`http://127.0.0.1:8000/cart/${id}/update`, tmp[index]);
    setCartItems(tmp);
  };
  const decrease = (id) => {
    let index = cartItems.findIndex((item) => item.id === id);
    let tmp = [...cartItems];
    let quantity = cartItems[index].quantity;
    if (quantity != 1) {
      axios.put(`http://127.0.0.1:8000/cart/${id}/update`, tmp[index]);
      tmp[index].quantity = quantity - 1;
    } else {
      axios.delete(`http://127.0.0.1:8000/cart/${id}/delete`);
      tmp.splice(index, 1);
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
      // setCartItems(res.data)
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
            <PayPalButton />
          </div>{" "}
        </>
      ) : (
        <p className="empty-cart-message"> Your cart is empty. </p>
      )}{" "}
    </div>
  );
}

export default ShoppingCart;
