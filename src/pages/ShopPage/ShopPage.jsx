import { useOutletContext } from "react-router-dom";
import ShopItem from "../../components/ShopItem/ShopItem";
import styles from "./ShopPage.module.css";

const ShopPage = () => {
  const { itemsData, setItemsData, hasFetchError, loading } =
    useOutletContext();

  if (loading)
    return (
      <main aria-label="shop page loading" className={styles.loadingPage}>
        LOADING...
      </main>
    );
  if (hasFetchError)
    return (
      <main aria-label="shop page error" className={styles.errorPage}>
        Oh no! Error fetching shop items
      </main>
    );

  return (
    <main className={styles.container} aria-label="shop page">
      {itemsData.map((item) => (
        <ShopItem
          key={item.id}
          item={item}
          setItemsData={setItemsData}
          isForShopPage={true}
        />
      ))}
    </main>
  );
};

export default ShopPage;
