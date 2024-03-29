import { InfoCircleFilled } from "@ant-design/icons";
import React from "react";
import "./error.css";

const Error = ({ message }) => {
  return (
    <div className="error-container">
      <InfoCircleFilled className="error-icon" /> {message}
    </div>
  );
};

export default Error;
