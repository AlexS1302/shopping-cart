import styles from "./ShopLink.module.css";
import { ShoppingBasket } from "lucide-react";
import { Link } from "react-router";

function ShopLink() {
  return (
    <Link to="/shop" className={styles.shopLink}>
      <ShoppingBasket />
      Shop
    </Link>
  );
}
export default ShopLink;
