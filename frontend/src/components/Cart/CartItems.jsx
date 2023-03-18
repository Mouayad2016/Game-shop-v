import React, { useState, useEffect } from "react";
import { postData, getData, deleteData } from "../helper/axios";
import { getCookieValue } from "../../helper/cookies";

import "./CartItem.css";

function CartItem({ props, shoppingCart_id }) {
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  useEffect(() => {
    setQuantity(props.quantity);
    setPrice(props.product.price);
  }, []);

  const incress = async () => {
    const userId = getCookieValue("user_id");
    try {
      let a = quantity + 1;
      setQuantity(a);
      const cart_id = await postData({
        url: `/cart/${userId}/${props.product.id}/postProduct`,
        data: {},
      });
    } catch (e) {
      console.log(e);
    }
  };
  const decress = async () => {
    try {
      console.log(shoppingCart_id);
      let a = quantity - 1;
      setQuantity(a);
      const cart_id = await deleteData({
        url: `/cart/${shoppingCart_id}/${props.product.id}/deleteProduct`,
        data: {},
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="cart-item">
      <img className="cart-item-image" src={props.product.image} alt="item" />
      <div className="cart-item-details">
        <p className="cart-item-name"> {props.product.name} </p>{" "}
        <p className="cart-item-price"> {`$${price * quantity}`} </p>{" "}
        <div className="cart-item-quantity">
          <button onClick={decress}>- </button> <span> {quantity} </span>{" "}
          <button onClick={incress}>+ </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default CartItem;
