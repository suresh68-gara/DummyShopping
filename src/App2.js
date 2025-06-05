// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import Layout from './components/Layout';
// import Dashboard from './components/Dashboard';
// import ChocolateTable from './components/ChocolateTable';
// import AddOrder from './components/AddOrder';
// import Logout from './components/Logout';
// import PayPalCheckout from './components/PayPalCheckout';
// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [username, setUsername] = useState('');

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={<Login setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />}
//         />
//         <Route
//           path="/home"
//           element={
//             isAuthenticated ? (
//               <Layout username={username} />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         >
//           <Route index element={<Dashboard username={username} />} />
//           <Route path="chocolate/:type" element={<ChocolateTable />} />
//           <Route path="add-order" element={<AddOrder />} />
//           <Route path="logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
//          // {/* {/* <Route path="/pay" element={<PayPalCheckout />} />  */}
//           <Route path="pay" element={<PayPalCheckout />} /> {/* ✅ Relative path */}
  
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import ChocolateTable from './components/ChocolateTable';
import AddOrder from './components/AddOrder';
import Logout from './components/Logout';
import PayPalCheckout from './components/PayPalCheckout';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />}
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <Layout username={username} />
            ) : (
              <Navigate to="/" />
            )
          }
        >
          <Route index element={<Dashboard username={username} />} />
          <Route path="chocolate/:type" element={<ChocolateTable />} />
          <Route path="add-order" element={<AddOrder />} />
          <Route path="logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="pay" element={<PayPalCheckout />} /> {/* ✅ PayPal route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
