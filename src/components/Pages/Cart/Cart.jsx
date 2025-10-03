import styles from "./Cart.module.css";
import { useOutletContext } from "react-router";

function Cart() {
  const {cartItems, setCartItems} = useOutletContext();

  return <div>Cart</div>;
}
export default Cart;
