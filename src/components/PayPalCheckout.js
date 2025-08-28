
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPalCheckout() {
  return (
    <div style={{ maxWidth: "500px", margin: "50px auto" }}>
      <h2>Pay with PayPal</h2>

      <PayPalScriptProvider options={{ "client-id": "test", currency: "USD" }}>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: "10.00",
                },
              }],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Transaction completed by ${details.payer.name.given_name}`);
              console.log(details);
            });
          }}
          onError={(err) => {
            console.error("PayPal Error:", err);
            alert("Payment failed.");
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default PayPalCheckout;

