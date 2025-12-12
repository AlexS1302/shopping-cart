import styles from "./Cart.module.css";
import { useOutletContext } from "react-router";
import { Trash2 } from "lucide-react";
import QuantityControls from "../../UI/QuantityControls/QuantityControls";
import ShopLink from "../../UI/ShopLink/ShopLink";

function Cart() {
  const { cartItems, setCartItems } = useOutletContext();

  const deleteItem = (itemId) => {
    setCartItems((prev) => prev.filter((product) => product.id !== itemId));
  };

  const handleCheckout = () => {
    alert("Thank you! Your order has been successfully placed.");
    setCartItems([]);
  };

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.Cart}>
      <h2>Your Basket</h2>
      {cartItems.length > 0 ? (
        <section className={styles.cartSection}>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <article key={item.id} className={styles.cartItemContainer}>
                <img
                  src={item.thumbnail}
                  alt={`Picture of ${item.title}`}
                  className={styles.itemThumbnail}
                ></img>
                <div className={styles.itemInfo}>
                  <div className={styles.itemInfoTop}>
                    <h3>{item.title}</h3>
                    <p>£{item.price}</p>
                  </div>
                  <div className={styles.itemInfoMiddle}>
                    <p>{item.description}</p>
                  </div>
                  <div className={styles.itemInfoBottom}>
                    <div className={styles.qtyContainer}>
                      <h3>Qty:</h3>
                      <QuantityControls
                        item={item}
                        showText={false}
                        styles={styles}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteItem(item.id)}
                      className={styles.deleteButton}
                    >
                      <Trash2 />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section className={styles.emptyCart}>
          <h3>Your basket is empty.</h3>
          <p>Start shopping to fill it up!</p>
          <ShopLink />
        </section>
      )}

      {cartItems.length > 0 && (
        <aside className={styles.cartSummary}>
          <h2>Order Summary</h2>
          <div className={styles.cartPrices}>
            <div className={styles.subTotal}>
              <h3>Subtotal</h3>
              <p>{subTotal.toFixed(2)}</p>
            </div>
            <div className={styles.delivery}>
              <h3>Delivery</h3>
              <p>£4.50</p>
            </div>
          </div>
          <hr></hr>
          <div className={styles.total}>
            <h3>Total</h3>
            <p>£{(subTotal + 4.5).toFixed(2)}</p>
          </div>
          <button
            type="button"
            onClick={handleCheckout}
            className={styles.checkoutButton}
          >
            Checkout
          </button>
        </aside>
      )}
    </div>
  );
}
export default Cart;
