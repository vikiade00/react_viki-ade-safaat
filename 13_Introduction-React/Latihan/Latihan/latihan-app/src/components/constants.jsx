import { Button } from "antd";
import { Link } from "react-router-dom";

export const MENU_ITEM = [
  {
    label: <Link to="/home">Home Page</Link>,
    key: "1",
  },
  {
    label: <Link to="/about">About</Link>,
    key: "2",
  },
  {
    label: <Link to="/contact">Contact</Link>,
    key: "3",
  },
  {
    label: <Link to="/form">Form</Link>,
    key: "4",
  },
  {
    label: <Link to="/form-exp">Form</Link>,
    key: "5",
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
