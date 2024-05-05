import { useOutletContext } from "react-router-dom";
import ShopItem from "../../components/ShopItem/ShopItem";

const CartPage = () => {
  const { itemsData, setItemsData } = useOutletContext();
  const itemsInCart = itemsData
    ? itemsData.filter((item) => item.quantity !== 0)
    : null;

  return (
    <div>
      <p>Your Cart</p>
      {itemsInCart &&
        itemsInCart.map((item) => (
          <ShopItem key={item.id} item={item} setItemsData={setItemsData} />
        ))}
    </div>
  );
};

export default CartPage;
