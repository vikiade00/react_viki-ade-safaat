import React from "react";
import Navbar from "../../component/Navbar";
import "./homePage.css";
import { Button } from "antd";
const HomePage = () => {
  return (
    <div className="homePage">
      <Navbar />
      <div className="container">
        <div className="contentHomePage">
          <div className="brand">
            <span>E</span>LAPTOP
          </div>
          <h1>
            <span>WELCOME </span>TO OUR PAGE
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam voluptates eius deleniti consectetur voluptas?</p>
          <Button type="primary" className="button" style={{ color: "white" }}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
