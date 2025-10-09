import { Link } from "react-router";
import { useState } from "react";
import { Menu } from "lucide-react";
import SearchBar from "./SearchBar/SearchBar";
import NavLinks from "./NavLinks/NavLinks";
import logo from "../../assets/icons/logo.svg";
import styles from "./Header.module.css";

function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen);

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

        <div className={styles.desktopLinks}>
          <NavLinks />
        </div>

        <Menu className={styles.hamburgerIcon} onClick={toggleHamburger} />

        {hamburgerOpen && (
          <div className={styles.mobileLinks}>
            <NavLinks onClick={() => setHamburgerOpen(false)} />
          </div>
        )}
      </nav>
    </div>
  );
}
export default Header;
