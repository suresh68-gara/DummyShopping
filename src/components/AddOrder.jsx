import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Initial order list
const initialOrders = [
  { id: 1, name: "Milk Chocolate", quantity: 2, price: 5.0 },
  { id: 2, name: "Dark Chocolate", quantity: 1, price: 6.5 }
];

function AddOrders() {
  const [orders, setOrders] = useState(initialOrders);
  const [form, setForm] = useState({ name: '', quantity: '', price: '' });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add a new chocolate order
  const handleAdd = () => {
    if (form.name && form.quantity && form.price) {
      const newOrder = {
        id: orders.length + 1,
        name: form.name,
        quantity: parseInt(form.quantity),
        price: parseFloat(form.price)
      };
      setOrders([...orders, newOrder]);
      setForm({ name: '', quantity: '', price: '' });
    }
  };

  // Calculate total amount
  const totalAmount = orders
    .reduce((sum, order) => sum + order.price * order.quantity, 0)
    .toFixed(2);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Add Chocolate Order</h3>

      <div className="mb-3">
        <input
          type="text"
          name="name"
          placeholder="Chocolate Name"
          className="form-control mb-2"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          className="form-control mb-2"
          value={form.quantity}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="form-control mb-2"
          value={form.price}
          onChange={handleChange}
        />
        <button className="btn btn-success" onClick={handleAdd}>Add Order</button>
      </div>

      <h5 className="mt-4">Orders Table</h5>
      <table className="table table-bordered table-striped mt-2">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Chocolate</th>
            <th>Quantity</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.quantity}</td>
              <td>{order.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="mt-4">Total Amount: ${totalAmount}</h4>

      {parseFloat(totalAmount) > 0 && (
        <div className="mt-3">
          <PayPalScriptProvider options={{ "client-id": "ATlSr5PVc4jv3VTO1CDXH2E4F2IrJ1COrf9d_9vyj97RSR1pILMLSJMQS4KmAgLRgRLo-EGYEcRxUO70", currency: "USD" }}>
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{
                    amount: { value: totalAmount }
                  }]
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  alert(`Payment completed by ${details.payer.name.given_name}`);
                  console.log("Transaction details:", details);
                });
              }}
              onError={(err) => {
                console.error("Payment Error:", err);
                alert("Payment failed.");
              }}
            />
          </PayPalScriptProvider>
        </div>
      )}
    </div>
  );
}

export default AddOrders;
