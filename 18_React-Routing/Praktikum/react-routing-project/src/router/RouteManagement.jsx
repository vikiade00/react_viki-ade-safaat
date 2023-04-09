import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutComponent from "../component/layout/LayoutComponent";
import HomePage from "../pages/homePage/HomePage";
import CreateProduct from "../pages/createProduct/CreateProduct";
import CreateAccount from "../pages/createAccount/CreateAccount";

const RouteManagement = () => {
  return (
    <div>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </LayoutComponent>
    </div>
  );
};

export default RouteManagement;
