import { Menu, Layout } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MENU_ITEM } from "../../constants";
import "./headerComponent.css";

export default function HeaderComponent() {
  const { Header } = Layout;
  const path = window.location.pathname;
  const [current, setCurrent] = useState(path);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <div className="header-wrapper">
        <Link to="/">
          <div
            style={{
              float: "left",
              width: 120,
              height: 31,
              margin: "16px 24px 16px 0",
              background: "rgba(255, 255, 255, 0.2)",
            }}
            onClick={() => setCurrent("")}
          />
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          items={MENU_ITEM}
          disabledOverflow
          onClick={onClick}
          selectedKeys={[current]}
        />
      </div>
    </Header>
  );
}
