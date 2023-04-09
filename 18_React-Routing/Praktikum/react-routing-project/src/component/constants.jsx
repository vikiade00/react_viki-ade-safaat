import { Link } from "react-router-dom";

export const MENU_ITEM = [
  {
    label: <Link to="/">Home Page</Link>,
    key: "1",
  },
  {
    label: <Link to="/create-product">Create Product</Link>,
    key: "2",
  },
  {
    label: <Link to="/create-account">Create Account</Link>,
    key: "3",
  },
];
