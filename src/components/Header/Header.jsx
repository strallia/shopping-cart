import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CartIcon from "../CartIcon/CartIcon";

const Header = ({ itemsData }) => {
  let totalItemsCount = 0;
  if (itemsData) {
    totalItemsCount = itemsData.reduce(
      (totalCount, item) => totalCount + item.quantity,
      0
    );
  }

  return (
    <header style={{ backgroundColor: "cornflowerblue" }}>
      (LOGO)
      <nav>
        <Link to="home">Home</Link>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart</Link>
      </nav>
      <CartIcon totalItemsCount={totalItemsCount} />
    </header>
  );
};

Header.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object),
};

export default Header;
