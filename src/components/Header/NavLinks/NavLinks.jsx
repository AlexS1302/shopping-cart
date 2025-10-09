import { Link } from "react-router";
import styles from "./NavLinks.module.css";

function NavLinks() {
  return (
    <>
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
    </>
  );
}
export default NavLinks;
