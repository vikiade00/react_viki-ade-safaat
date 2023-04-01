import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CreateProduct from "./pages/createProduct/CreateProduct";
import Route from "./router/router";
import CreateAccount from "./pages/createAccount/CreateAccount";

function App() {
  return (
    <div class Name="App">
      <div>
        <Route path="/create-product">
          <CreateProduct />
        </Route>
        <Route path="/create-account">
          <CreateAccount />
        </Route>
      </div>
    </div>
  );
}

export default App;
