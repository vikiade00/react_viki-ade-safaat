import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import RouteManagement from "./router/RouteManagement";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouteManagement />
      </BrowserRouter>
    </div>
  );
}

export default App;
