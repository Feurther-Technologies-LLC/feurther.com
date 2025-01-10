// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">FEURTHER</div>
      <ul className="navbar-menu">
        <li><a href="#intro">简介</a></li>
        <li><a href="#features">特色功能</a></li>
        <li><a href="#download">下载</a></li>
        <li><a href="#contact">联系方式</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
