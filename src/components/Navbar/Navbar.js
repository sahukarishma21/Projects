import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">Privacy Policy</li>
        <li className="navbar-item">Terms of Use</li>
        <li className="navbar-item">Sales and Refunds</li>
        <li className="navbar-item">Legal</li>
      </ul>
    </nav>
  );
};

export default Navbar;
