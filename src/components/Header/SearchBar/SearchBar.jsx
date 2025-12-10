import styles from "./SearchBar.module.css";
import SearchControls from "./SearchControls/SearchControls";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Search, X } from "lucide-react";

function SearchBar({ isBelow1200 }) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [overlay, setOverlay] = useState(false);

  const handleSearch = () => {
    const trimmed = searchInput.trim();
    if (trimmed) {
      navigate(`/shop?q=${encodeURIComponent(trimmed)}`);
    } else {
      navigate("/shop");
    }
    setSearchInput("");
    setOverlay(false)
  };

  useEffect(() => {
    if (overlay) {
      document.body.classList.add(styles["noScroll"]);
    } else {
      document.body.classList.remove(styles["noScroll"]);
    }
  }, [overlay]);

  return (
    <>
      {isBelow1200 ? (
        <div className={`${styles.searchSection}`}>
          {overlay ? (
            <div className={styles.blackBg}>
              <div className={styles.overlayContainer}>
                <div className={styles.overlayControls}>
                  <SearchControls
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    handleSearch={handleSearch}
                  />
                </div>

                <X
                  className={styles.closeIcon}
                  onClick={() => setOverlay(false)}
                />
              </div>
            </div>
          ) : (
            <Search
              className={styles.searchIcon}
              onClick={() => setOverlay(true)}
            />
          )}
        </div>
      ) : (
        <div className={styles.searchSection}>
          <Search className={styles.searchIcon} />
          <SearchControls
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            handleSearch={handleSearch}
          />
        </div>
      )}
    </>
  );
}

export default SearchBar;
