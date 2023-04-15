import React from "react";
import { Layout, Menu, theme } from "antd";
import FooterComponent from "./footer/FooterComponent";
import HeaderComponent from "./header/HeaderComponent";

const { Header, Content, Footer } = Layout;

export default function LayoutComponent({ children }) {
  return (
    <Layout>
      {/* Header */}
      <HeaderComponent />
      {/* content */}
      <Content>{children}</Content>
      {/* footer */}
      <FooterComponent />
    </Layout>
  );
}
