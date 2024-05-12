import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ShopItem.module.css";

const ShopItem = ({ item, setItemsData, isForShopPage = false }) => {
  const [addendQuantity, setAddendQuantity] = useState(1);
  const [totalQuantity, setTotalQuantity] = useState(item.quantity);
  const { id, image, title, price, description, quantity } = item;

  const setItemQuantityValue = (newQuantity) => {
    setItemsData((items) => {
      return items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const handleIncreaseQtyClick = () => {
    if (isForShopPage) {
      setAddendQuantity((prevQty) => prevQty + 1);
    } else {
      const updatedTotalQuantity = totalQuantity + 1;
      setTotalQuantity(updatedTotalQuantity);
      setItemQuantityValue(updatedTotalQuantity);
    }
  };

  const handleDecreaseQtyClick = () => {
    if (isForShopPage) {
      setAddendQuantity((prevQty) => {
        return prevQty - 1 !== 0 ? prevQty - 1 : prevQty;
      });
    } else {
      const updatedTotalQuantity = totalQuantity - 1;
      setTotalQuantity(updatedTotalQuantity);
      setItemQuantityValue(updatedTotalQuantity);
    }
  };

  const handleAddToCartClick = () => {
    setAddendQuantity(1);
    setItemQuantityValue(quantity + addendQuantity);
  };

  const handleRemoveFromCartClick = () => {
    setItemQuantityValue(0);
  };

  return (
    <div className={styles.container} aria-label="shop item" role="figure">
      <img src={image} className={styles.image} />
      <p className={styles.title}>{title}</p>
      {isForShopPage && <p className={styles.description}>{description}</p>}
      <div className={styles.priceQuantityContainer}>
        <p className={styles.price}>$ {price}</p>
        <label className={styles.quantityLabel}>
          Qty:
          <p aria-label="quantity">
            {isForShopPage ? addendQuantity : totalQuantity}
          </p>
          <div className={styles.quantityButtons}>
            <button
              onClick={handleIncreaseQtyClick}
              className={styles.upArrow}
              aria-label="increase quantity"
            />
            <button
              onClick={handleDecreaseQtyClick}
              className={styles.downArrow}
              aria-label="decrease quantity"
            />
          </div>
        </label>
      </div>
      {isForShopPage ? (
        <button
          onClick={handleAddToCartClick}
          className={styles.addToCartButton}
        >
          Add to Cart
        </button>
      ) : (
        <button
          onClick={handleRemoveFromCartClick}
          className={styles.removeButton}
        >
          Remove
        </button>
      )}
    </div>
  );
};

ShopItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    quantity: PropTypes.number,
  }),
  setItemsData: PropTypes.func,
  isForShopPage: PropTypes.bool,
};

export default ShopItem;
