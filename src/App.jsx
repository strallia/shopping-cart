import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [itemsData, setItemsData] = useState(null);
  const [hasFetchError, setHasFetchError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery", {
      mode: "cors",
    })
      .then((res) => {
        if (res.status >= 400) throw new Error("fetch error");
        return res.json();
      })
      .then((json) => {
        const cartItems = json.map((item) => {
          return { ...item, quantity: 0 };
        });
        setItemsData(cartItems);
      })
      .catch((error) => setHasFetchError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.appContainer}>
      <Header itemsData={itemsData} />
      <Outlet context={{ itemsData, setItemsData, hasFetchError, loading }} />
    </div>
  );
};

export default App;
