import styles from "./AddToCartButton.module.css";
import { useOutletContext } from "react-router";
import QuantityControls from "../../../UI/QuantityControls/QuantityControls";

function AddToCartButton({ product }) {
  const { cartItems, setCartItems } = useOutletContext();

  const addToCart = () => {
    setCartItems((prev) => [
      ...prev,
      { ...product, quantity: product.quantity + 1 },
    ]);
  };

  const matchedItem = cartItems.find((item) => item.id === product.id);

  return (
    <>
      {matchedItem ? (
        <div className={styles.qtyControlsContainer}>
          <QuantityControls
            item={matchedItem}
            showText={true}
            styles={styles}
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={addToCart}
          className={styles.addToCartBtn}
        >
          Add to Cart
        </button>
      )}
    </>
  );
}
export default AddToCartButton;
