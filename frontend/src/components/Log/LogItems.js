import React from "react";
// import "./CartItem.css";

function LogItems(props) {
  const { image, name, price, quantity } = props;

  return (
    <div className="log-item">
      <img className="log-item-image" src={image} alt="item" />
      <div className="log-item-details">
        <p className="log-item-name">{name}</p>
        <p className="log-item-price">{`$${price}`}</p>
        <div className="log-item-quantity">
          <button>-</button>
          <span>{quantity}</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default LogItems;
