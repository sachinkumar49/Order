import { Link } from "react-router-dom";

export const MenuLink = () => {
  return (
    <div>
      <Link to="/order">Get Order</Link>
      <Link to="/orderDetails"> Order Details </Link>
    </div>
  );
};
