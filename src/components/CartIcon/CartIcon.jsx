import PropTypes from "prop-types";
import CartImage from "../../assets/cart-icon.png";
import styles from "./CartIcon.module.css";

const CartIcon = ({ totalItemsCount }) => {
  return (
    <button className={styles.container} aria-label="cart button">
      <img src={CartImage} className={styles.cart} />
      <div className={styles.count} aria-label="cart total" role="img">
        {totalItemsCount}
      </div>
    </button>
  );
};

CartIcon.propTypes = {
  totalItemsCount: PropTypes.number,
};

export default CartIcon;
