import { useOutletContext } from "react-router-dom";
import ShopItem from "../../components/ShopItem/ShopItem";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const { itemsData, setItemsData } = useOutletContext();
  const itemsInCart = itemsData
    ? itemsData.filter((item) => item.quantity !== 0)
    : [];
  const subtotal = itemsInCart?.reduce((subtotal, item) => {
    return subtotal + item.quantity * item.price;
  }, 0);

  const handleCheckout = () => {};

  return (
    <main aria-label="cart page" className={styles.cartPageContainer}>
      <p className={styles.title} aria-label="your cart">
        Your Cart
      </p>
      {itemsInCart.length === 0 ? (
        <p className={styles.noItemsMessage} aria-label="no items">
          No items in cart
        </p>
      ) : (
        <>
          <div className={styles.cardsContainer}>
            {itemsInCart &&
              itemsInCart.map((item) => (
                <ShopItem
                  key={item.id}
                  item={item}
                  setItemsData={setItemsData}
                />
              ))}
          </div>
          <p className={styles.subtotal} aria-label="subtotal">
            Subtotal: ${subtotal}
          </p>
          <button className="secondary-button">Checkout</button>
        </>
      )}
    </main>
  );
};

export default CartPage;
