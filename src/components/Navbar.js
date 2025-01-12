// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">FEURTHER</div>
      <ul className="navbar-menu">
        <li><a href="#intro">Introduction</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#download">Download</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
