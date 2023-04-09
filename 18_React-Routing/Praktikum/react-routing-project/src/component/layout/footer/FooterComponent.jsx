import React from "react";
import { Layout } from "antd";

export default function FooterComponent() {
  const { Footer } = Layout;
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Ant Design ©2023 Created by Ant UED
    </Footer>
  );
}
