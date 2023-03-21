import React, { useState } from "react";
import "./PaypalPayement.css";
import PayPalButton from "./paybalBotton";
import ShoppingCart from "./ShoppingCart";

// Filling in the shipping info will be on the same page as the payment method
function PaypalPayement(total) {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="shipping-form-container">
      <h2>Shipping Information</h2>
      <form className="info-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={shippingInfo.fullName}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, fullName: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={shippingInfo.address}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, address: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={shippingInfo.city}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, city: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State/Province</label>
          <input
            type="text"
            id="state"
            name="state"
            value={shippingInfo.state}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, state: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip/Postal Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={shippingInfo.zip}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, zip: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={shippingInfo.country}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, country: e.target.value })
            }
            required
          />
        </div>
        <PayPalButton total={total} />
        {/* <a href="#howtopay">
          <button className="sub-bt">NEXT</button>
        </a> */}
      </form>

      {/* <div id="howtopay">
        <PayPalButton total={total} />
      </div> */}
    </div>
  );
}

export default PaypalPayement;
