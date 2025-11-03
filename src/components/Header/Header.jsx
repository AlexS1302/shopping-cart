import { Link } from "react-router";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import SearchBar from "./SearchBar/SearchBar";
import NavLinks from "./NavLinks/NavLinks";
import logo from "../../assets/icons/logo.svg";
import styles from "./Header.module.css";
import useBreakpoint from "../../hooks/useBreakpoint/";

function Header() {
  const isAbove1200 = useBreakpoint("(min-width: 1200px)");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen);

  useEffect(() => {
    if (isAbove1200) {
      setHamburgerOpen(false);
    }
  }, [isAbove1200]);

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

        {/* Mobile */}
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
