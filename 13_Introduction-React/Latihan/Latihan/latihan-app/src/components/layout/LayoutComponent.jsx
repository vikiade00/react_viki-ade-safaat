import React from "react";
import { Layout, Menu, theme } from "antd";
import { MENU_ITEM } from "../constants";
import FooterComponent from "./footer/FooterComponent";
import HeaderComponent from "./header/HeaderComponent";

const { Header, Content, Footer } = Layout;

export default function LayoutComponent({ children }) {
  return (
    <Layout>
      {/* Header */}
      <HeaderComponent />
      {/* content */}
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "100px",
            backgroundColor: "#FFF",
          }}
        >
          {children}
        </div>
      </Content>
      {/* footer */}
      <FooterComponent />
    </Layout>
  );
}
