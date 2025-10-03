import { Link } from "react-router";
import { Search } from "lucide-react";
import { ShoppingBag, ShoppingCart, Heart } from "lucide-react";
import logo from "../../assets/icons/logo.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.Header}>
      <nav>
        <h1 className={styles.headerTitle}>
          <Link to="/">
            <img src={logo} alt="Plentiful Logo" className={styles.logo}></img>
            Plentiful
          </Link>
        </h1>

        <div className={styles.searchSection}>
          <Search className={styles.searchIcon} />
          <input
            id="search"
            name="search"
            placeholder="Skincare"
            className={styles.searchInput}
          ></input>
          <button type="button" className={styles.searchButton}>Search</button>
        </div>

        <ul className={styles.navLinks}>
          <li className={styles.shopSection}>
            <Link to="shop" className={styles.shopLink}>
              Shop
            </Link>
          </li>
          <li className={styles.cartSection}>
            <Link to="cart" className={styles.cartLink}>
              Cart
            </Link>
          </li>
          <li className={styles.favouritesSection}>
            <Link to="favourites" className={styles.favouritesLink}>
              Favourites
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
