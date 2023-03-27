import React from "react";
import { Layout, Menu, theme } from "antd";
import { MENU_ITEM } from "../constans";
import BgImage from "../../assets/rm222-mind-16.jpg";
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
            backgroundImage: `url(${BgImage})`,
            backgroundSize: "cover",
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
