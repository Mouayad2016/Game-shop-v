import React from "react";
import "./ShoppingCart.css";
import CartItem from "./CartItem";

function ShoppingCart() {
  return (
    <div className="shopping-cart">
      <h2 className="shopping-cart-header">Shopping Cart</h2>
      <div className="cart-items">
        <CartItem
          image="https://via.placeholder.com/150"
          name="Item 1"
          price="9.99"
          quantity="1"
        />
        <CartItem
          image="https://via.placeholder.com/150"
          name="Item 2"
          price="19.99"
          quantity="2"
        />
      </div>
      <div className="cart-summary">
        <p className="cart-summary-text">
          Subtotal: <span className="cart-summary-price">$49.97</span>
        </p>
        <button className="cart-summary-button">Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
