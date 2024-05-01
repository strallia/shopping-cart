import { useState } from "react";
import CartImage from "../../assets/cart-icon.png";
import styles from "./CartIcon.module.css";

const CartIcon = () => {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className={styles.container}>
      <img src={CartImage} className={styles.cart} />
      <div className={styles.count}>{cartCount}</div>
    </div>
  );
};

export default CartIcon;
