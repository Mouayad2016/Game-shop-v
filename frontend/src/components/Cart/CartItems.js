import React from "react";
import "./CartItem.css";

function CartItem(props) {
  const { image, name, price, quantity } = props;

  return (
    <div className="cart-item">
      <img className="cart-item-image" src={image} alt="item" />
      <div className="cart-item-details">
        <p className="cart-item-name">{name}</p>
        <p className="cart-item-price">{`$${price}`}</p>
        <p className="cart-item-quantity">{`Quantity: ${quantity}`}</p>
      </div>
    </div>
  );
}

export default CartItem;
