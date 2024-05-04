import { useState } from "react";
import PropTypes from "prop-types";

const ShopItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { image, title, price, description } = item;

  const handleQuantityOnChange = (e) => {
    console.log(e);
  };

  return (
    <div>
      <img src={image} />
      <p>{title}</p>
      <p>description: {description}</p>
      <input
        id="quantity"
        type="number"
        value={quantity}
        onChange={handleQuantityOnChange}
      />
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

ShopItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string.isRequired,
  }),
};

export default ShopItem;
