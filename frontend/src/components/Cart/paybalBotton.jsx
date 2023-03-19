import React from "react";
import axios from "axios";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
// import ReactLoading from "react-loading";
import "./style.css";
const PayPalButton = ({ total }) => {
  const [loading, setLoading] = useState(false);
  const handlePay = async () => {
    console.log("hi");
    console.log("try to pay");
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/payment/pay",
        {
          amount: `${total}`,
          currency: "USD",
          description: "Example payment",
        },
        {
          timeout: 5000,
        }
      );

      window.location.href = response.data.link;
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <button type="button" onClick={total !== 0 ? handlePay : null}>
      {loading ? (
        <BeatLoader loading={true} size={15} color={"#007bff"} />
      ) : (
        <img
          src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png"
          alt="Pay with PayPal"
        />
      )}
    </button>
  );
};

export default PayPalButton;
