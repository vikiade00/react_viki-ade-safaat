import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import Footer from "./component/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HomePage />
      <AboutPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
