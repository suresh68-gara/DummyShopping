import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
  FaCandyCane,
  FaCookie,
  FaIceCream,
  FaMugHot,
  FaPlusCircle,
  FaSignOutAlt,
  FaCreditCard
} from 'react-icons/fa';

function Layout({ username }) {
  const styles = {
    headerText: {
      color: 'blue', // light pink for "Welcome,"
      fontSize: '20px',
    },
    username: {
      color: 'skypink', // deep pink for username
      fontWeight: 'bold',
      marginLeft: '8px',
    },
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center bg-dark text-white p-3">
        <div>
          <img src="\download (1).jpg" alt="logo" height="40" />
        </div>
        <h4 style={styles.headerText}>
          Welcome, <span style={styles.username}>{username}</span>
        </h4>
      </div>

      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <div className="bg-light p-3" style={{ width: '220px' }}>
          <ul className="nav flex-column">
            <NavLink to="chocolate/candy" className="nav-link">
              <FaCandyCane /> Candy
            </NavLink>
            <NavLink to="chocolate/cookie" className="nav-link">
              <FaCookie /> Cookie
            </NavLink>
            <NavLink to="chocolate/icecream" className="nav-link">
              <FaIceCream /> Ice Cream
            </NavLink>
            <NavLink to="chocolate/drink" className="nav-link">
              <FaMugHot /> Chocolate Drink
            </NavLink>
            <NavLink to="add-order" className="nav-link">
              <FaPlusCircle /> Add Order
            </NavLink>
            <NavLink to="pay" className="nav-link">
              <FaCreditCard /> Pay with PayPal
            </NavLink>
            <NavLink to="logout" className="nav-link text-danger">
              <FaSignOutAlt /> Logout
            </NavLink>
          </ul>
        </div>

        {/* Main Content */}
        <div className="p-4 flex-grow-1">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3">
        Choco Zone, Anakapalli, Vizag City | Contact: 1234567890 | Email: choco@zone.com
      </footer>
    </div>
  );
}

export default Layout;
