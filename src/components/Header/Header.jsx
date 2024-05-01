import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      (LOGO)
      <nav>
        <Link to="home">Home</Link>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
