import React from "react";
import axios from "axios";
import { useState } from "react";
// import ReactLoading from "react-loading";
import "./style.css";
const PayPalButton = () => {
  const [loading, setLoading] = useState(false);
  const handlePay = async () => {
    console.log("hi");
    console.log("try to pay");
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/payment/pay",
        {
          amount: "10.00",
          currency: "USD",
          description: "Example payment",
        },
        {
          timeout: 5000,
        }
      );
      setLoading(false);
      window.location.href = response.data.link;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <button type="button" onClick={handlePay}>
      {
        // loading ? (
        // <ReactLoading type={"spin"} color={"#123abc"} height={50} width={50} />
        // ) :
        <img
          src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png"
          alt="Pay with PayPal"
        />
      }
    </button>
  );
};

export default PayPalButton;
