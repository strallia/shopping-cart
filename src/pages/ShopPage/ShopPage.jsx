import { useOutletContext } from "react-router-dom";
import ShopItem from "../../components/ShopItem/ShopItem";

const ShopPage = () => {
  const { itemsData, hasFetchError } = useOutletContext();

  if (hasFetchError) return <p>fetch error, oh no!</p>;
  if (!itemsData) return;

  return (
    <div>
      {itemsData.map((item) => (
        <ShopItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ShopPage;
