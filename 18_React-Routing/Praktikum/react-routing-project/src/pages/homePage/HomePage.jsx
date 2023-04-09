import React from "react";
import "./homePage.css";
import { Button } from "antd";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="homePage">
      <br />
      <div className="container">
        <div className="contentHomePage">
          <div className="brand">
            <span>E</span>LAPTOP
          </div>
          <h1>
            <span>WELCOME </span>TO OUR PAGE
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            aperiam voluptates eius deleniti consectetur voluptas?
          </p>
          <Link to="/create-product">
            <Button
              type="primary"
              className="button"
              style={{ color: "white" }}
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
