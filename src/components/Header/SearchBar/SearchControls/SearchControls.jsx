import styles from "./SearchControls.module.css";

function SearchControls({ searchInput, setSearchInput, handleSearch }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <input
        id="search"
        name="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Fragrance"
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
    </>
  );
}
export default SearchControls;
