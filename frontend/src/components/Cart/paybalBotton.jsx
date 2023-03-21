import React, { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
// import ReactLoading from "react-loading";
import "./style.css";
const PayPalButton = ({ total }) => {
  const [loading, setLoading] = useState(false);
  const handlePay = async () => {
    console.log(total);
    console.log("pay");
    try {
      setLoading(true);
      if (total !== 0) {
        const response = await axios.post(
          "http://localhost:8000/payment/pay",
          {
            amount: total.total,
            currency: "USD",
            description: "Example payment",
          },
          {
            timeout: 5000,
          }
        );
        window.location.href = response.data.link;
      } else {
        window.location.href = "http://localhost:3000/download";
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <button type="button" onClick={handlePay}>
      {loading ? (
        <BeatLoader loading={true} size={15} color={"#007bff"} />
      ) : total !== 0 ? (
        <img
          src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png"
          alt="Pay with PayPal"
        />
      ) : (
        <p>Get you Game</p>
      )}
    </button>
  );
};

export default PayPalButton;
