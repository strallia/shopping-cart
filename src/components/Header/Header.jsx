import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CartIcon from "../CartIcon/CartIcon";
import Logo from "../../../public/flower-logo.png";

import styles from "./Header.module.css";

const Header = ({ itemsData }) => {
  let totalItemsCount = 0;
  if (itemsData) {
    totalItemsCount = itemsData.reduce(
      (totalCount, item) => totalCount + item.quantity,
      0
    );
  }

  return (
    <header className={styles.header} aria-label="header">
      <img src={Logo} className={styles.logo} aria-label="logo" />
      <nav className={styles.navLinks}>
        <Link to="home" aria-label="home">
          Home
        </Link>
        <Link to="shop" aria-label="shop">
          Shop
        </Link>
        <Link to="cart" aria-label="cart">
          <CartIcon totalItemsCount={totalItemsCount} />
        </Link>
      </nav>
    </header>
  );
};

Header.propTypes = {
  itemsData: PropTypes.arrayOf(PropTypes.object),
};

export default Header;
