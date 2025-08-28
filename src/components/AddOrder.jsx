


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// function AddOrders() {
//   const { type } = useParams();
  
//   const [orders, setOrders] = useState([]);
//   const [form, setForm] = useState({ name: '', quantity: '', price: '' });
//   const [toasts, setToasts] = useState([]);

//   useEffect(() => {
//     const titles = {
//       AddOrder: 'AddOrder'
//     };

//     if (type && titles[type]) {
//       document.title = `${titles[type]}`;
//     } else {
//       document.title = 'AddOrder Menu';
//     }
//   }, [type]);

//   // Toast notification system
//   const showToast = (message, type = 'info') => {
//     const id = Date.now();
//     setToasts(prev => [...prev, { id, message, type }]);

//     // Auto-remove toast after 3 seconds
//     setTimeout(() => {
//       setToasts(prev => prev.filter(toast => toast.id !== id));
//     }, 3000);
//   };

//   // Toast container styles
//   const toastContainerStyle = {
//     position: 'fixed',
//     top: '20px',
//     right: '20px',
//     zIndex: 1000,
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px'
//   };

//   // Individual toast styles
//   const toastStyle = (type) => ({
//     padding: '15px 25px',
//     borderRadius: '8px',
//     color: 'white',
//     fontWeight: '500',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
//     backgroundColor:
//       type === 'success' ? '#4caf50' :
//         type === 'error' ? '#f44336' :
//           type === 'warning' ? '#ff9800' :
//             '#2196f3',
//     animation: 'slideIn 0.3s ease-out',
//     transform: 'translateX(0)',
//     opacity: 1,
//     transition: 'all 0.3s ease'
//   });

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

//     const fixedCart = savedCart.map(item => ({
//       ...item,
//       price: typeof item.price === 'string' ?
//         parseFloat(item.price.replace(/[^0-9.]/g, '')) :
//         item.price
//     }));

//     setOrders(fixedCart);
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAdd = () => {
//     if (form.name && form.quantity && form.price) {
//       const newOrder = {
//         id: orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1,
//         name: form.name,
//         quantity: parseInt(form.quantity),
//         price: parseFloat(form.price)
//       };
//       const updatedOrders = [...orders, newOrder];
//       setOrders(updatedOrders);
//       localStorage.setItem('cart', JSON.stringify(updatedOrders));
//       setForm({ name: '', quantity: '', price: '' });
//       showToast(`${form.name} added to cart!`, 'success');
//     } else {
//       showToast('Please fill all fields', 'warning');
//     }
//   };

//   const removeFromCart = (id) => {
//     const item = orders.find(order => order.id === id);
//     const updatedCart = orders.filter(item => item.id !== id);
//     setOrders(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     showToast(`${item.name} removed from cart`, 'error');
//   };

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity < 1) return;

//     const item = orders.find(order => order.id === id);
//     const updatedCart = orders.map(item =>
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     );

//     setOrders(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     showToast(`${item.name} quantity updated to ${newQuantity}`, 'info');
//   };

//   const totalAmount = orders
//     .reduce((sum, order) => sum + order.price * order.quantity, 0)
//     .toFixed(2);

//   return (
//     <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
//       {/* Toast Container */}
//       <div style={toastContainerStyle}>
//         {toasts.map(toast => (
//           <div
//             key={toast.id}
//             style={toastStyle(toast.type)}
//           >
//             {toast.message}
//           </div>
//         ))}
//       </div>

//       <h3 style={{
//         textAlign: 'center',
//         color: '#4a2c2a',
//         paddingBottom: '10px',
//         borderBottom: '2px solid chocolate',
//         marginBottom: '30px'
//       }}>
//         Chocolate Order Cart
//       </h3>

//       <div style={{
//         backgroundColor: '#f9f9f9',
//         padding: '20px',
//         borderRadius: '10px',
//         marginBottom: '30px',
//         boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//       }}>
//         <h4 style={{ marginTop: '0', color: '#555' }}>Add Custom Item</h4>
//         <input
//           type="text"
//           name="name"
//           placeholder="Chocolate Name"
//           className="form-control mb-2"
//           value={form.name}
//           onChange={handleChange}
//           style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
//         />
//         <input
//           type="number"
//           name="quantity"
//           placeholder="Quantity"
//           className="form-control mb-2"
//           value={form.quantity}
//           onChange={handleChange}
//           min="1"
//           style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           className="form-control mb-2"
//           value={form.price}
//           onChange={handleChange}
//           step="0.01"
//           min="0"
//           style={{ padding: '10px', marginBottom: '15px', width: '100%' }}
//         />
//         <button
//           className="btn btn-success"
//           onClick={handleAdd}
//           style={{
//             backgroundColor: '#4CAF50',
//             border: 'none',
//             padding: '10px 15px',
//             borderRadius: '5px',
//             color: 'white',
//             cursor: 'pointer',
//             fontWeight: 'bold',
//             width: '100%'
//           }}
//         >
//           Add Order
//         </button>
//       </div>

//       <h4 style={{ marginBottom: '15px', color: '#333' }}>Your Orders</h4>
//       {orders.length === 0 ? (
//         <p style={{ textAlign: 'center', color: '#777' }}>Your cart is empty</p>
//       ) : (
//         <>
//           <table style={{
//             width: '100%',
//             borderCollapse: 'collapse',
//             marginBottom: '30px',
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//           }}>
//             <thead>
//               <tr style={{ backgroundColor: '#f5f5f5' }}>
//                 <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Item</th>
//                 <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Price</th>
//                 <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Quantity</th>
//                 <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Total</th>
//                 <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map(order => (
//                 <tr key={order.id} style={{ borderBottom: '1px solid #eee' }}>
//                   <td style={{ padding: '12px' }}>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                       {order.name}
//                     </div>
//                   </td>
//                   <td style={{ padding: '12px' }}>${order.price.toFixed(2)}</td>
//                   <td style={{ padding: '12px' }}>
//                     <input
//                       type="number"
//                       min="1"
//                       value={order.quantity}
//                       onChange={(e) => updateQuantity(order.id, parseInt(e.target.value))}
//                       style={{
//                         width: '60px',
//                         padding: '5px',
//                         border: '1px solid #ddd',
//                         borderRadius: '4px'
//                       }}
//                     />
//                   </td>
//                   <td style={{ padding: '12px' }}>${(order.price * order.quantity).toFixed(2)}</td>
//                   <td style={{ padding: '12px' }}>
//                     <button
//                       onClick={() => removeFromCart(order.id)}
//                       style={{
//                         backgroundColor: '#f44336',
//                         color: 'white',
//                         border: 'none',
//                         borderRadius: '4px',
//                         padding: '5px 10px',
//                         cursor: 'pointer'
//                       }}
//                     >
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div style={{
//             backgroundColor: '#f9f9f9',
//             padding: '20px',
//             borderRadius: '10px',
//             marginBottom: '30px',
//             textAlign: 'right'
//           }}>
//             <h3 style={{ margin: '0' }}>
//               Total Amount: <span style={{ color: '#c77905' }}>${totalAmount}</span>
//             </h3>
//           </div>

//           {parseFloat(totalAmount) > 0 && (
//             <div style={{ marginTop: '30px' }}>
//               <PayPalScriptProvider options={{
//                 "client-id": "ATlSr5PVc4jv3VTO1CDXH2E4F2IrJ1COrf9d_9vyj97RSR1pILMLSJMQS4KmAgLRgRLo-EGYEcRxUO70",
//                 currency: "USD"
//               }}>
//                 <PayPalButtons
//                   style={{ layout: "vertical" }}
//                   createOrder={(data, actions) => {
//                     return actions.order.create({
//                       purchase_units: [{
//                         amount: { value: totalAmount }
//                       }]
//                     });
//                   }}
//                   onApprove={(data, actions) => {
//                     return actions.order.capture().then((details) => {
//                       showToast(`Payment completed! Thank you ${details.payer.name.given_name}`, 'success');
//                       localStorage.removeItem('cart');
//                       setOrders([]);
//                     });
//                   }}
//                   onError={(err) => {
//                     console.error("Payment Error:", err);
//                     showToast("Payment failed. Please try again.", 'error');
//                   }}
//                 />
//               </PayPalScriptProvider>
//             </div>
//           )}
//         </>
//       )}

//       {/* Animation styles for toasts */}
//       <style>
//         {`
//           @keyframes slideIn {
//             from {
//               transform: translateX(100%);
//               opacity: 0;
//             }
//             to {
//               transform: translateX(0);
//               opacity: 1;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default AddOrders;






import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import styled, { keyframes } from 'styled-components'; // Import styled and keyframes

// Keyframes for animations
const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Styled Components for a modern, responsive, and animated look

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  font-family: 'Poppins', sans-serif; /* A modern font */
  background-color: #f8f8f8;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 20px auto;
    padding: 15px;
  }
`;

const Title = styled.h3`
  text-align: center;
  color: #6a0000; /* Richer, deep red */
  padding-bottom: 15px;
  border-bottom: 3px solid #b71c1c; /* Matching border */
  margin-bottom: 40px;
  font-size: 2.5em;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 30px;
  }
`;

const SectionContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px) scale(1.005);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const SectionTitle = styled.h4`
  margin-top: 0;
  color: #333;
  font-size: 1.8em;
  margin-bottom: 20px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 15px;
  }
`;

const Input = styled.input`
  padding: 12px 15px;
  margin-bottom: 15px;
  width: calc(100% - 30px); /* Account for padding */
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1em;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #b71c1c;
    box-shadow: 0 0 0 3px rgba(183, 28, 28, 0.2);
  }

  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 0.9em;
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  background-color: ${props =>
    props.primary ? '#b71c1c' :
      props.success ? '#4CAF50' :
        props.danger ? '#e53935' :
          '#607d8b'}; /* Modern button colors */
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 1em;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background-color 0.2s ease;
  will-change: transform; /* Hint for browser optimization */

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    filter: brightness(1.1); /* Slightly brighter on hover */
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 0.9em;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  overflow: hidden; /* Ensures rounded corners */

  th, td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #eee;
    font-size: 1em;

    @media (max-width: 768px) {
      padding: 10px;
      font-size: 0.9em;
    }
  }

  th {
    background-color: #f0f0f0;
    font-weight: 600;
    color: #555;
    text-transform: uppercase;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tbody tr {
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: #fdfdfd;
    }
  }

  /* Responsive Table - Stack on smaller screens */
  @media (max-width: 600px) {
    thead {
      display: none; /* Hide table headers */
    }
    tbody, tr, td {
      display: block; /* Make table elements behave like block elements */
      width: 100%;
    }
    tr {
      margin-bottom: 15px;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      background-color: #fff;
    }
    td {
      text-align: right;
      position: relative;
      padding-left: 50%; /* Space for the label */
      border: none; /* Remove individual cell borders */
    }
    td::before {
      /* Use the "data-label" attribute for the heading here */
      content: attr(data-label);
      position: absolute;
      left: 15px;
      width: calc(50% - 30px);
      padding-right: 10px;
      white-space: nowrap;
      font-weight: 600;
      color: #6a0000;
      text-align: left;
    }
    td:last-child {
      border-bottom: none;
    }
  }
`;

const TotalAmountContainer = styled.div`
  background-color: #fff3e0; /* Light orange background */
  padding: 25px;
  border-radius: 15px;
  margin-bottom: 30px;
  text-align: right;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid #ffe0b2;

  h3 {
    margin: 0;
    font-size: 2em;
    color: #c77905;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    span {
      font-weight: 700;
      margin-left: 10px;
      letter-spacing: 0.5px;
    }

    @media (max-width: 768px) {
      font-size: 1.5em;
    }
  }
`;

const PayPalContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const EmptyCartMessage = styled.p`
  text-align: center;
  color: #777;
  font-size: 1.2em;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 30px;
  }
`;

const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 600px) {
    top: auto;
    bottom: 20px;
    left: 10px;
    right: 10px;
    width: auto;
  }
`;

const Toast = styled.div`
  padding: 15px 25px;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  background-color: ${props =>
    props.type === 'success' ? '#4caf50' :
      props.type === 'error' ? '#f44336' :
        props.type === 'warning' ? '#ff9800' :
          '#2196f3'};
  animation: ${slideIn} 0.3s ease-out forwards;
  transition: all 0.3s ease;
  cursor: pointer; /* Make them dismissible */

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 15px rgba(0,0,0,0.2);
  }

  @media (max-width: 600px) {
    text-align: center;
    padding: 12px 20px;
    font-size: 0.9em;
  }
`;

function AddOrder() {
  const { type } = useParams();

  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({ name: '', quantity: '', price: '' });
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    // Dynamically load Poppins font from Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const titles = {
      AddOrder: 'AddOrder'
    };

    if (type && titles[type]) {
      document.title = `${titles[type]}`;
    } else {
      document.title = 'AddOrder Menu';
    }
  }, [type]);

  // Toast notification system
  const showToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);

    // Auto-remove toast after 4 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 4000);
  };

  const dismissToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };


  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

    const fixedCart = savedCart.map(item => ({
      ...item,
      price: typeof item.price === 'string' ?
        parseFloat(item.price.replace(/[^0-9.]/g, '')) :
        item.price
    }));

    setOrders(fixedCart);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (form.name && form.quantity && form.price && parseFloat(form.quantity) > 0 && parseFloat(form.price) > 0) {
      const newOrder = {
        id: orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1,
        name: form.name,
        quantity: parseInt(form.quantity),
        price: parseFloat(form.price)
      };
      const updatedOrders = [...orders, newOrder];
      setOrders(updatedOrders);
      localStorage.setItem('cart', JSON.stringify(updatedOrders));
      setForm({ name: '', quantity: '', price: '' });
      showToast(`${form.name} added to cart!`, 'success');
    } else {
      showToast('Please fill all fields with valid positive numbers for quantity and price.', 'warning');
    }
  };

  const removeFromCart = (id) => {
    const item = orders.find(order => order.id === id);
    if (!item) return; // Prevent error if item not found
    const updatedCart = orders.filter(item => item.id !== id);
    setOrders(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    showToast(`${item.name} removed from cart`, 'error');
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1 || isNaN(newQuantity)) {
      showToast('Quantity must be at least 1', 'warning');
      return;
    }

    const item = orders.find(order => order.id === id);
    if (!item) return; // Prevent error if item not found
    const updatedCart = orders.map(order =>
      order.id === id ? { ...order, quantity: newQuantity } : order
    );

    setOrders(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    showToast(`${item.name} quantity updated to ${newQuantity}`, 'info');
  };

  const totalAmount = orders
    .reduce((sum, order) => sum + order.price * order.quantity, 0)
    .toFixed(2);

  return (
    <PageContainer>
      <ToastContainer>
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            type={toast.type}
            onClick={() => dismissToast(toast.id)}
          >
            {toast.message}
          </Toast>
        ))}
      </ToastContainer>

      <Title>Chocolate Order Cart</Title>

      <SectionContainer>
        <SectionTitle>Add Custom Item</SectionTitle>
        <Input
          type="text"
          name="name"
          placeholder="Chocolate Name"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
          min="1"
        />
        <Input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          step="0.01"
          min="0"
        />
        <Button
          success
          onClick={handleAdd}
          fullWidth
        >
          Add Order
        </Button>
      </SectionContainer>

      <SectionTitle>Your Orders</SectionTitle>
      {orders.length === 0 ? (
        <EmptyCartMessage>Your cart is empty. Start adding some delicious chocolates!</EmptyCartMessage>
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td data-label="Item">{order.name}</td>
                  <td data-label="Price">${order.price.toFixed(2)}</td>
                  <td data-label="Quantity">
                    <Input
                      type="number"
                      min="1"
                      value={order.quantity}
                      onChange={(e) => updateQuantity(order.id, parseInt(e.target.value))}
                      style={{ width: '80px', padding: '8px', marginBottom: '0' }}
                    />
                  </td>
                  <td data-label="Total">${(order.price * order.quantity).toFixed(2)}</td>
                  <td data-label="Action">
                    <Button
                      danger
                      onClick={() => removeFromCart(order.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <TotalAmountContainer>
            <h3>
              Total Amount: <span>${totalAmount}</span>
            </h3>
          </TotalAmountContainer>

          {parseFloat(totalAmount) > 0 && (
            <PayPalContainer>
              <SectionTitle style={{ marginBottom: '25px', color: '#6a0000' }}>Proceed to Checkout</SectionTitle>
              <PayPalScriptProvider options={{
                "client-id": "ATlSr5PVc4jv3VTO1CDXH2E4F2IrJ1COrf9d_9vyj97RSR1pILMLSJMQS4KmAgLRgRLo-EGYEcRxUO70",
                currency: "USD"
              }}>
                <PayPalButtons
                  style={{ layout: "vertical", color: "blue", shape: "pill" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [{
                        amount: { value: totalAmount }
                      }]
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      showToast(`Payment completed! Thank you ${details.payer.name.given_name}`, 'success');
                      localStorage.removeItem('cart');
                      setOrders([]);
                    });
                  }}
                  onError={(err) => {
                    console.error("Payment Error:", err);
                    showToast("Payment failed. Please try again.", 'error');
                  }}
                />
              </PayPalScriptProvider>
            </PayPalContainer>
          )}
        </>
      )}
    </PageContainer>
  );
}

export default AddOrder;