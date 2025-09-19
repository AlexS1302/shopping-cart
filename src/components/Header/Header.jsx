import { Link } from "react-router";
import { Search } from "lucide-react";
import { ShoppingBag, ShoppingCart, Heart } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.Header}>
      <nav>
        <h1 className={styles.headerTitle}>
          <Link to="/">Plentiful</Link>
        </h1>

        <div className={styles.searchSection}>
          <input
            id="search"
            name="search"
            placeholder="Search"
            className={styles.searchInput}
          ></input>
          <Search className={styles.searchIcon}/>
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
          <li className={styles.favouritesSection}>
            <Link to="favourites" className={styles.favouritesLink}>
              <Heart />
              Favourites
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
