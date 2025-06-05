// // src/comp/PayPalCheckout.js

// import React from 'react';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// function PayPalCheckout() {
//   return (
//     <div className="container mt-5">
//       <h2>PayPal Payment</h2>

//       <PayPalScriptProvider options={{ "client-id": "ATlSr5PVc4jv3VTO1CDXH2E4F2IrJ1COrf9d_9vyj97RSR1pILMLSJMQS4KmAgLRgRLo-EGYEcRxUO70", currency: "USD" }}>
//         <PayPalButtons
//           style={{ layout: "vertical" }}
//           createOrder={(data, actions) => {
//             return actions.order.create({
//               purchase_units: [{
//                 amount: {
//                   value: "10.00"  // Change this amount as needed
//                 }
//               }]
//             });
//           }}
//           onApprove={(data, actions) => {
//             return actions.order.capture().then(function(details) {
//               alert("Transaction completed by " + details.payer.name.given_name);
//               console.log("Transaction Details:", details);
//             });
//           }}
//           onError={(err) => {
//             console.error("PayPal Checkout Error:", err);
//           }}
//         />
//       </PayPalScriptProvider>
//     </div>
//   );
// }

// export default PayPalCheckout;


// src/comp/PayPalCheckout.js

// src/comp/PayPalCheckout.js

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

