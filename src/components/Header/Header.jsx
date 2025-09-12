import { Link } from "react-router";
import { Search } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.Header}>
      <nav>
        <h1 className={styles.headerTitle}>
          <Link to="/">Shopping Cart</Link>
        </h1>

        <div className={styles.searchSection}>
          <Search />
          <input
            id="search"
            name="search"
            placeholder="What are you looking for?"
            className={styles.searchInput}
          ></input>
        </div>

        <ul className={styles.navLinks}>
          <li className={styles.shopSection}>
            <Link to="shop" className={styles.shopLink}>
              <ShoppingCart />
              Shop
            </Link>
          </li>
          <li className={styles.cartSection}>
            <Link to="cart" className={styles.cartLink}>
              <ShoppingBag />
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
