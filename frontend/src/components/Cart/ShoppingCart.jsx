import React, { useState, useEffect } from "react";
import "./ShoppingCart.css";
import CartItem from "./CartItems";

import { Link } from "react-router-dom";
import PayPalButton from "./paybalBotton";
import { getData } from "../helper/axios";
import { getCookieValue } from "../../helper/cookies";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [cart_id, setCart_id] = useState();

  const [cartTotal, setCartTotal] = useState();

  useEffect(() => {
    getShoppingCart();
  }, []);

  const getShoppingCart = async () => {
    const user_id = getCookieValue("user_id");
    try {
      const shoppingCart = await getData({
        url: `/cart/${user_id}/get`,
      });
      setCart_id(shoppingCart.data.id);
      setCartItems(shoppingCart.data.cart_items);

      let sum = 0;
      shoppingCart.data.cart_items.map((e) => {
        console.log(e.quantity);
        for (let i = 1; i <= e.quantity; i++) {
          sum += e.product.price;
        }
      });
      setCartTotal(sum);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="shopping-cart">
      <h2 className="shopping-cart-header"> Shopping Cart </h2>
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {" "}
            {cartItems.map((item) => (
              <CartItem key={item.id} props={item} shoppingCart_id={cart_id} />
            ))}{" "}
          </div>{" "}
          <div>
            <p>
              <strong>Paybal email:</strong> sb - qonwa25271562
              @personal.example.com
            </p>
            <p>
              <strong>Paybal password:</strong> 00000000
            </p>
          </div>
          <div className="cart-summary">
            <p className="cart-summary-text">
              Subtotal:
              <span className="cart-summary-price">
                $ {cartTotal.toFixed(2)}
              </span>
            </p>
            <Link to="/Paypage">
              <button id="check">Check</button>
            </Link>
            <PayPalButton />
          </div>
        </>
      ) : (
        <p className="empty-cart-message"> Your cart is empty. </p>
      )}
    </div>
  );
}

export default ShoppingCart;
