import { Link } from "react-router";
import { Menu } from "lucide-react";
import SearchBar from "./SearchBar/SearchBar";
import NavLinks from "./NavLinks/NavLinks";
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

        <SearchBar />

        <NavLinks />
      </nav>
    </div>
  );
}
export default Header;
