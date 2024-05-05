import { useState } from "react";
import PropTypes from "prop-types";

const ShopItem = ({ item, setItemsData, isForShopPage = false }) => {
  const [addendQuantity, setAddendQuantity] = useState(1);
  const [totalQuantity, setTotalQuantity] = useState(item.quantity);
  const { id, image, title, price, description, quantity } = item;

  const handleAddendQuantityOnChange = (e) => {
    setAddendQuantity(+e.target.value);
  };

  const handleTotalQuantityOnChange = (e) => {
    const updatedTotalQuantity = +e.target.value;
    setTotalQuantity(updatedTotalQuantity);
    setItemsData((items) => {
      return items.map((item) =>
        item.id === id ? { ...item, quantity: updatedTotalQuantity } : item
      );
    });
  };

  const handleAddToCartClick = () => {
    setItemsData((items) => {
      return items.map((item) =>
        item.id === id ? { ...item, quantity: quantity + addendQuantity } : item
      );
    });
    setAddendQuantity(1);
  };

  const handleDeleteItemClick = () => {};

  return (
    <div>
      <img src={image} />
      <p>{title}</p>
      {isForShopPage && <p>description: {description}</p>}
      <label>
        Quantity:
        <input
          id={isForShopPage ? "addend-quantity" : "total-quantity"}
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
      <p>${price}</p>
      {isForShopPage ? (
        <button onClick={handleAddToCartClick}>Add to Cart</button>
      ) : (
        <button onClick={handleDeleteItemClick}>Delete</button>
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
