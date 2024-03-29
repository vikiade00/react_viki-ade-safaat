import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import LoginPage from "../pages/LoginPage/LoginPage";
import LayoutComponent from "../components/layout/LayoutComponent";
import FormComponent from "../pages/FormPage/FormComponent";
import HomePage from "../pages/HomePage/HomePage";
import Contact from "../pages/Contact/Contact";
import AboutMe from "../pages/AboutMe/aboutMe";
import FormExp from "../pages/FormExp/FormExp";
import FormGraphql from "../pages/FormGraphql/FormGraphql";

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
              <Route path="/form" element={<FormGraphql />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/about/:id" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/form-exp" element={<FormExp />} />
            </Routes>
          </LayoutComponent>
        )}
      </Suspense>
    </div>
  );
};

export default RouteManagement;
