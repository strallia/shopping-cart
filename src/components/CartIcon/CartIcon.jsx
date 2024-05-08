import PropTypes from "prop-types";
import CartImage from "../../assets/cart-icon.png";
import styles from "./CartIcon.module.css";

const CartIcon = ({ totalItemsCount }) => {
  return (
    <div className={styles.container}>
      <img src={CartImage} className={styles.cart} />
      <div className={styles.count} aria-label="cart total" role="img">
        {totalItemsCount}
      </div>
    </div>
  );
};

CartIcon.propTypes = {
  totalItemsCount: PropTypes.number,
};

export default CartIcon;
