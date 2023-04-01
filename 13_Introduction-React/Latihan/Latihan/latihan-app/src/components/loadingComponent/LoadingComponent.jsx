import { Spin } from "antd";
import React from "react";
import "./loadingComponent.css";
const LoadingComponent = () => {
  return (
    <div>
      <Spin size="large" tip="Loading . . ." className="loading-container" />
    </div>
  );
};

export default LoadingComponent;
