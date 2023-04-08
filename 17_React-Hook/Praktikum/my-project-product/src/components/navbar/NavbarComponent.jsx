import React from "react";
import { Button, Space } from "antd";
import "./navbarComponent.css";
const NavbarComponent = () => {
  return (
    <div className="navbar">
      <h3 className="nav-brand">Simple Header</h3>
      <Space wrap className="nav-link">
        <Button type="primary">Home</Button>
        <Button type="primary">Features</Button>
        <Button type="primary">Pricing</Button>
        <Button type="primary">FAQs</Button>
        <Button type="primary">About</Button>
      </Space>
    </div>
  );
};

export default NavbarComponent;
