import React, { useState, useEffect } from "react";
import { postData, getData, deleteData } from "../helper/axios";
import { getCookieValue } from "../../helper/cookies";
import "./CartItem.css";

function CartItem({ props, onData, removeItem, shoppingCart_id }) {
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  useEffect(() => {
    setQuantity(props.quantity);
    setPrice(props.product.price);
  }, []);

  const incress = async () => {
    const userId = getCookieValue("user_id");
    const user_cart = getCookieValue("cart_id");
    try {
      let a = quantity + 1;
      setQuantity(a);
      if (userId) {
        const cart_id = await postData({
          url: `/cart/${userId}/${props.product.id}/postProduct`,
          data: {},
        });
      } else if (user_cart) {
        const postDataToCartByCartId = await postData({
          url: `/cart/${user_cart}/${props.product.id}/postProduct/cartId`,
          data: {},
        });
      }
      onData(price);
    } catch (e) {
      console.log(e);
    }
  };
  const decress = async () => {
    const userId = getCookieValue("user_id");
    const user_cart = getCookieValue("cart_id");
    try {
      let a = quantity !== 0 ? quantity - 1 : 0;

      if (quantity === 1) {
        removeItem(props.product.id);
      }
      setQuantity(a);
      const cart_id = await deleteData({
        url: `/cart/${shoppingCart_id}/${props.product.id}/deleteProduct`,
        data: {},
      });
      onData(-price);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="cart-item">
      <img className="cart-item-image" src={props.product.image} alt="item" />
      <div className="cart-item-details">
        <p className="cart-item-name"> {props.product.name} </p>
        <p className="cart-item-price"> {`${price * quantity} SEK`} </p>
        <div className="cart-item-quantity">
          <button onClick={decress}>- </button> <span> {quantity} </span>
          <button onClick={incress}>+ </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
