import styles from "./Cart.module.css";
import { useOutletContext } from "react-router";
import { Trash2, Plus, Minus } from "lucide-react";

function Cart() {
  const { cartItems, setCartItems } = useOutletContext();
  console.log(cartItems);

  return (
    <div className={styles.Cart}>
      <h2>Your Basket</h2>
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
                    <button type="button" className={styles.qtyButtonMinus}>
                      <Minus />
                    </button>
                    <p>1</p>
                    <button type="button" className={styles.qtyButtonPlus}>
                      <Plus />
                    </button>
                  </div>
                  <button type="button" className={styles.deleteButton}>
                    <Trash2 />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className={styles.cartSummary}>
        <h2>Order Summary</h2>
        <div className={styles.cartPrices}>
          <div className={styles.subTotal}>
            <h3>Subtotal</h3>
            <p>£59.97</p>
          </div>
          <div className={styles.delivery}>
            <h3>Delivery</h3>
            <p>£4.50</p>
          </div>
        </div>
        <hr></hr>
        <div className={styles.total}>
          <h3>Total</h3>
          <p>£64.47</p>
        </div>
        <button type="button" className={styles.checkoutButton}>
          Checkout
        </button>
      </aside>
    </div>
  );
}
export default Cart;
