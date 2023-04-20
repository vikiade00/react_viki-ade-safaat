import { Button } from "antd";
import { Link } from "react-router-dom";

export const MENU_ITEM = [
  {
    label: <Link to="/home">Home Page</Link>,
    key: "/home",
  },
  {
    label: <Link to="/create-product">Create Product</Link>,
    key: "/create-product",
  },
  {
    label: <Link to="/create-account">Create Account</Link>,
    key: "create-account",
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
    key: "4",
  },
];
