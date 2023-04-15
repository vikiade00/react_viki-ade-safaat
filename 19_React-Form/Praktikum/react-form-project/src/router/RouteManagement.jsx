import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutComponent from "../component/layout/LayoutComponent";
import HomePage from "../pages/homePage/HomePage";
import CreateProduct from "../pages/createProduct/CreateProduct";
import CreateAccount from "../pages/createAccount/CreateAccount";
import DetailProduct from "../pages/createProduct/DetailProduct";

const RouteManagement = () => {
  return (
    <div>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route
            path="/create-product/:productCode"
            element={<DetailProduct />}
          />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </LayoutComponent>
    </div>
  );
};

export default RouteManagement;
