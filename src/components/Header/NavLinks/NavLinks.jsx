import { Link } from "react-router";
import styles from "./NavLinks.module.css";

function NavLinks({ onClick }) {
  return (
    <>
      <ul className={styles.navLinks}>
        <li className={styles.shopSection}>
          <Link to="shop" className={styles.shopLink} onClick={onClick}>
            Shop
          </Link>
        </li>
        <li className={styles.cartSection}>
          <Link to="cart" className={styles.cartLink} onClick={onClick}>
            Cart
          </Link>
        </li>
        <li className={styles.favouritesSection}>
          <Link
            to="favourites"
            className={styles.favouritesLink}
            onClick={onClick}
          >
            Favourites
          </Link>
        </li>
      </ul>
    </>
  );
}
export default NavLinks;
