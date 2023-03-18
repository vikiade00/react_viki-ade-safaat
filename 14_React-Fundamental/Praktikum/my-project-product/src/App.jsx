import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CreateProduct from "./pages/createProduct/CreateProduct";

function App() {
  return (
    <div className="App">
      <div>
        <CreateProduct />
      </div>
    </div>
  );
}

export default App;
