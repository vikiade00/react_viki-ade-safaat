import { Button } from "antd";
import { Link } from "react-router-dom";

export const MENU_ITEM = [
  {
    label: <Link to="/home">Home Page</Link>,
    key: "/home",
  },
  {
    label: <Link to="/about">About</Link>,
    key: "/about",
  },
  {
    label: <Link to="/contact">Contact</Link>,
    key: "/contact",
  },
  {
    label: <Link to="/form">Form Graphql</Link>,
    key: "/form",
  },
  {
    label: <Link to="/form-exp">Form CRUD</Link>,
    key: "/form-exp",
  },

  {
    label: (
      <Link to="/">
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem("token");
          }}
          danger
        >
          Logout
        </Button>
      </Link>
    ),
    key: "6",
  },
];
