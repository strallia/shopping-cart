import { useState } from "react";
import PropTypes from "prop-types";

const ShopItem = ({ item, setItemsData }) => {
  const [quantityAddendValue, setQuantityAddendValue] = useState(1);
  const { id, image, title, price, description, quantity } = item;

  const handleQuantityOnChange = (e) => {
    setQuantityAddendValue(+e.target.value);
  };

  const handleAddToCartClick = () => {
    setItemsData((items) => {
      const updatedItems = items.map((item) => {
        return item.id === id
          ? { ...item, quantity: quantity + quantityAddendValue }
          : item;
      });
      return updatedItems;
    });
    setQuantityAddendValue(1);
  };

  return (
    <div>
      <img src={image} />
      <p>{title}</p>
      <p>description: {description}</p>
      <label>
        Quantity:
        <input
          id="quantity"
          type="number"
          value={quantityAddendValue}
          min="1"
          onChange={handleQuantityOnChange}
        />
      </label>

      <p>${price}</p>
      <button onClick={handleAddToCartClick}>Add to Cart</button>
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
};

export default ShopItem;
