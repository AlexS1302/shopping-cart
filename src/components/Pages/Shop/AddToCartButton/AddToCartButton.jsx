import styles from "./AddToCartButton.module.css";
import { useOutletContext } from "react-router";
import QuantityControls from "./QuantityControls/QuantityControls";

function AddToCartButton({ product }) {
  const { cartItems, setCartItems } = useOutletContext();

  const updateCart = () => {
    setCartItems((prev) => [
      ...prev,
      { ...product, quantity: product.quantity + 1 },
    ]);
  };

  const matchedItem = cartItems.find((item) => item.id === product.id);

  return (
    <>
      {matchedItem ? (
        <QuantityControls item={matchedItem} />
      ) : (
        <button
          type="button"
          onClick={updateCart}
          className={styles.addToCartBtn}
        >
          Add to Cart
        </button>
      )}
    </>
  );
}
export default AddToCartButton;
