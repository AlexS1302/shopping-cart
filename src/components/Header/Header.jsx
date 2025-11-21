import { Link } from "react-router";
import { Menu } from "lucide-react";
import SearchBar from "./SearchBar/SearchBar";
import NavLinks from "./NavLinks/NavLinks";
import logo from "../../assets/icons/logo.svg";
import styles from "./Header.module.css";
import useBreakpoint from "../../hooks/useBreakpoint";
import { useState, useEffect } from "react";

function Header() {
  const isAbove1200 = useBreakpoint("(min-width: 1200px)");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen);

  // prevent menu from remaining open if screen size is changed
  useEffect(() => {
    if (isAbove1200) {
      setHamburgerOpen(false);
    }
  }, [isAbove1200]);

  useEffect(() => {
    if (hamburgerOpen) {
      document.body.classList.add(styles["noScroll"]);
    } else {
      document.body.classList.remove(styles["noScroll"]);
    }
  }, [hamburgerOpen]);

  return (
    <div className={`${styles.Header} ${hamburgerOpen ? styles.expand : ""}`}>
      <nav className={`${hamburgerOpen ? styles.hamburgerNav : ""}`}>
        {isAbove1200 ? (
          <>
            <h1 className={styles.headerTitle}>
              <Link to="/" onClick={() => setHamburgerOpen(false)}>
                <img
                  src={logo}
                  alt="Plentiful Logo"
                  className={styles.logo}
                ></img>
                Plentiful
              </Link>
            </h1>

            <SearchBar hamburgerOpen={hamburgerOpen} />

            <div className={styles.desktopLinks}>
              <NavLinks />
            </div>
          </>
        ) : (
          <>
            <div className={styles.mobileLeftSide}>
              <h1 className={styles.headerTitle}>
                <Link to="/" onClick={() => setHamburgerOpen(false)}>
                  <img
                    src={logo}
                    alt="Plentiful Logo"
                    className={styles.logo}
                  ></img>
                  Plentiful
                </Link>
              </h1>
            </div>

            <div className={styles.mobileRightSide}>
              {hamburgerOpen ? null : (
                <SearchBar hamburgerOpen={hamburgerOpen} />
              )}

              <Menu
                className={styles.hamburgerIcon}
                onClick={toggleHamburger}
              />
            </div>
            {hamburgerOpen && (
              <div className={styles.mobileLinks}>
                <NavLinks onClick={() => setHamburgerOpen(false)} />
              </div>
            )}
          </>
        )}
      </nav>
    </div>
  );
}
export default Header;
