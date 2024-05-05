import { useOutletContext } from "react-router-dom";
import ShopItem from "../../components/ShopItem/ShopItem";

const ShopPage = () => {
  const { itemsData, setItemsData, hasFetchError, loading } =
    useOutletContext();

  if (loading) return <p>LOADING...</p>;
  if (hasFetchError) return <p>fetch error, oh no!</p>;

  return (
    <div>
      {itemsData.map((item) => (
        <ShopItem key={item.id} item={item} setItemsData={setItemsData} />
      ))}
    </div>
  );
};

export default ShopPage;
