import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Route from "./router/router";
import Contact from "./pages/Contact/Contact";
import LoginPage from "./pages/LoginPage/LoginPage";
import LayoutComponent from "./components/layout/LayoutComponent";
import FormComponent from "./pages/FormPage/FormComponent";

function App() {
  return (
    <div className="App">
      <LayoutComponent>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/form">
          <FormComponent />
        </Route>
      </LayoutComponent>
    </div>
  );
}

export default App;
