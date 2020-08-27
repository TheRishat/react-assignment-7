import React from 'react';
import logo from '../../Images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div className="nav">
        <a href="/courses">Course</a>
        <a href="/catagories">Catagories</a>
        <a href="/contact">Contact Us</a>
      </div>
    </div>
  );
};

export default Header;
