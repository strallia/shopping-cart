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

  const handleAddendQuantityOnChange = (e) => {
    setAddendQuantity(+e.target.value);
  };

  const handleTotalQuantityOnChange = (e) => {
    const updatedTotalQuantity = +e.target.value;
    setTotalQuantity(updatedTotalQuantity);
    setItemQuantityValue(updatedTotalQuantity);
  };

  const handleAddToCartClick = () => {
    setAddendQuantity(1);
    setItemQuantityValue(quantity + addendQuantity);
  };

  const handleRemoveFromCartClick = () => {
    setItemQuantityValue(0);
  };

  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <p className={styles.title}>{title}</p>
      {isForShopPage && <p className={styles.description}>{description}</p>}
      <div className={styles.priceQuantityContainer}>
        <p className={styles.price}>$ {price}</p>
        <label className={styles.quantityLabel}>
          Quantity:
          <input
            id={id}
            className={
              isForShopPage ? styles.addendQuantity : styles.totalQuantity
            }
            type="number"
            value={isForShopPage ? addendQuantity : totalQuantity}
            min="1"
            onChange={
              isForShopPage
                ? handleAddendQuantityOnChange
                : handleTotalQuantityOnChange
            }
          />
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
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number,
  }),
  setItemsData: PropTypes.func,
  isForShopPage: PropTypes.bool,
};

export default ShopItem;
