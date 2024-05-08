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
    <header className={styles.header}>
      <img src={Logo} className={styles.logo} />
      <nav className={styles.navLinks}>
        <Link to="home">Home</Link>
        <Link to="shop">Shop</Link>
        <Link to="cart">
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
