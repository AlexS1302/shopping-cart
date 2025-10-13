import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Search } from "lucide-react";

function SearchBar() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    const trimmed = searchInput.trim();
    if (trimmed) {
      navigate(`/shop?q=${encodeURIComponent(trimmed)}`);
    } else {
      navigate("/shop");
    }
    setSearchInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchSection}>
      <Search className={styles.searchIcon} />
      <input
        id="search"
        name="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Skincare"
        size="30"
        className={styles.searchInput}
      ></input>
      <button
        type="button"
        className={styles.searchButton}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
export default SearchBar;
