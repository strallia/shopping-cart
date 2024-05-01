import { Link } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";

const Header = () => {
  return (
    <header>
      (LOGO)
      <nav>
        <Link to="home">Home</Link>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart</Link>
      </nav>
      <CartIcon />
    </header>
  );
};

export default Header;
