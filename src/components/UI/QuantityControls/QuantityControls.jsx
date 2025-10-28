import { useOutletContext } from "react-router";
import { Minus, Plus } from "lucide-react";

function QuantityControls({ item, showText, styles }) {
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
    <>
      <button
        type="button"
        onClick={() => adjustQuantity(item.id, -1)}
        className={styles.qtyButtonMinus}
      >
        <Minus />
      </button>

      <div className={styles.qtyText}>
        <span>{item.quantity}</span>
        {showText && <p>in your basket</p>}
      </div>

      <button
        type="button"
        onClick={() => adjustQuantity(item.id, 1)}
        className={styles.qtyButtonPlus}
      >
        <Plus />
      </button>
    </>
  );
}
export default QuantityControls;
