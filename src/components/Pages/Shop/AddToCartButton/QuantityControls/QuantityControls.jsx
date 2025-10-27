import styles from "./QuantityControls.module.css";
import { useOutletContext } from "react-router";
import { Minus, Plus } from "lucide-react";

function QuantityControls({ item }) {
  const { setCartItems } = useOutletContext();

  const adjustQuantity = (id, value) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + value } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className={styles.qtyControlsContainer}>
      <button
        type="button"
        onClick={() => adjustQuantity(item.id, -1)}
        className={styles.qtyButtonMinus}
      >
        <Minus />
      </button>

      <div className={styles.qtyText}>
        <span>{item.quantity}</span>
        <p>in your basket</p>
      </div>

      <button
        type="button"
        onClick={() => adjustQuantity(item.id, 1)}
        className={styles.qtyButtonPlus}
      >
        <Plus />
      </button>
    </div>
  );
}
export default QuantityControls;
