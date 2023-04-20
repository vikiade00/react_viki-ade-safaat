import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LayoutComponent from "../component/layout/LayoutComponent";
import HomePage from "../pages/homePage/HomePage";
import CreateProduct from "../pages/createProduct/CreateProduct";
import CreateAccount from "../pages/createAccount/CreateAccount";
import DetailProduct from "../pages/createProduct/DetailProduct";
import LoginPage from "../pages/loginPage/LoginPage";
import LoadingComponent from "../component/loadingComponent/LoadingComponent";

const RouteManagement = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);
  return (
    <div>
      <Suspense fallback={<LoadingComponent />}>
        {!token ? (
          <Routes>
            <Route path="/" element={<LoginPage />} />
          </Routes>
        ) : (
          <LayoutComponent>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/create-product" element={<CreateProduct />} />

              <Route path="/create-account" element={<CreateAccount />} />
            </Routes>
          </LayoutComponent>
        )}
      </Suspense>
    </div>
  );
};

export default RouteManagement;
