import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";

const App = () => {
  const [itemsData, setItemsData] = useState(null);
  const [hasFetchError, setHasFetchError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => {
        if (res.status >= 400) throw new Error("fetch error");
        return res.json();
      })
      .then((json) => setItemsData(json))
      .catch((error) => setHasFetchError(error));
  }, []);

  return (
    <div>
      <Header />
      <Outlet context={{ itemsData, hasFetchError }} />
    </div>
  );
};

export default App;
