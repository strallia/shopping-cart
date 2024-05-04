import { useState } from "react";

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

export default ShopItem;
