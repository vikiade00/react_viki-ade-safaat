import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ConfigProvider } from "antd";
import { ThemeConfig } from "./theme/ThemeConfig";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider theme={ThemeConfig}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);
