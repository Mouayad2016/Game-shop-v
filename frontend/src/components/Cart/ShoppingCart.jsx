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
    const user_cart = getCookieValue("cart_id");

    try {
      const shoppingCart = await getData({
        url: user_id ? `/cart/${user_id}/get` : `/cart/${user_cart}/get/cartId`,
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
  const reflecctOnChildChanges = (childData) => {
    const a = cartTotal + childData;
    setCartTotal(a);
  };
  const removeItem = (prod_id) => {
    console.log("try to remove");
    const newList = cartItems.filter((e) => e.product.id !== prod_id);
    setCartItems(newList);
  };

  if(cartItems !== undefined) {
  return (
    <div className="shopping-cart">
      <h2 className="shopping-cart-header"> Shopping Cart </h2>
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {" "}
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                onData={reflecctOnChildChanges}
                props={item}
                removeItem={removeItem}
                shoppingCart_id={cart_id}
              />
            ))}{" "}
          </div>{" "}
          {/*<div>
            <p>
              <strong>Paybal email:</strong> sb - qonwa25271562
              @personal.example.com
            </p>
            <p>
              <strong>Paybal password:</strong> 00000000
            </p>
            </div>*/}
          <div className="cart-summary">
            <p className="cart-summary-text">
              Subtotal:&emsp;
              <span className="cart-summary-price">
                {cartTotal.toFixed(2)} SEK
              </span>
            </p>
            <Link
              to={{
                pathname: "/Paypage",
                search: `?total=${cartTotal}`, // state: { total: cartTotal },
              }}
            >
              <button className="check">Submit</button>
            </Link>
          </div>
        </>
      ) : (
        <p className="empty-cart-message"> Your cart is empty. </p>
      )}
    </div>
  );
  } else {
    return (
      <div className="shopping-cart">
        <h2 className="shopping-cart-header"> Shopping Cart </h2>
        <p className="empty-cart-message"> Your cart is empty. </p>
      </div>
    );
  }
}

export default ShoppingCart;
