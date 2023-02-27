import React, { useState } from "react";
import "./ShoppingCart.css";
import CartItem from "./CartItems";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, image: "https://via.placeholder.com/150", name: "Item 1", price: 9.99, quantity: 1 },
    { id: 2, image: "https://via.placeholder.com/150", name: "Item 2", price: 19.99, quantity: 2 }
  ]);

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    setCartItems([]);
  };

  return (
    <div className="shopping-cart">
      <h2 className="shopping-cart-header">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className="cart-summary">
            <p className="cart-summary-text">
              Subtotal: <span className="cart-summary-price">${cartTotal.toFixed(2)}</span>
            </p>
            <button className="cart-summary-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="empty-cart-message">Your cart is empty.</p>
      )}
    </div>
  );
}

export default ShoppingCart;
