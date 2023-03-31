import React from "react";
import "./navbar.css";
import "../pages/homePage/homePage.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand brandNav">
        <span>E</span>LAPTOP
      </div>
      <div className="navLink">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
