import App from "../App.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import ShopPage from "../pages/ShopPage/ShopPage.jsx";
import CartPage from "../pages/CartPage/CartPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
];

export default routes;
