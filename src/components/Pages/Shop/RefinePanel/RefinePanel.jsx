import { useState } from "react";
import styles from "./RefinePanel.module.css";
import { ChevronDown, LibraryBig, ArrowDownWideNarrow } from "lucide-react";

function RefinePanel({ setFilters }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = (menuId) => {
    setOpenDropdown((prev) => (prev === menuId ? null : menuId));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setFilters((prev) => ({
      ...prev,
      category: checked ? value : "",
    }));
  };

  return (
    <aside className={styles.refinePanel}>
      <div className={styles.categoryContainer}>
        <div
          className={styles.categoryToggle}
          onClick={() => toggleMenu("category")}
        >
          <div>
            <LibraryBig />
            Category
          </div>

          <ChevronDown
            className={`${styles.icon} ${
              openDropdown === "category" ? styles.open : styles.closed
            }`}
          />
        </div>

        <div
          className={`${styles.categoryDropdown} ${
            openDropdown === "category" ? styles.open : styles.closed
          }`}
        >
          <div className={styles.categoryContent}>
            <label>
              <input
                type="checkbox"
                value="furniture"
                onChange={handleCheckboxChange}
              ></input>
              Furniture
            </label>
            <label>
              <input
                type="checkbox"
                value="fragrances"
                onChange={handleCheckboxChange}
              ></input>
              Fragrance
            </label>
            <label>
              <input
                type="checkbox"
                value="home-decoration"
                onChange={handleCheckboxChange}
              ></input>
              Home Decor
            </label>
            <label>
              <input
                type="checkbox"
                value="skin-care"
                onChange={handleCheckboxChange}
              ></input>
              Skincare
            </label>
            <label>
              <input
                type="checkbox"
                value="beauty"
                onChange={handleCheckboxChange}
              ></input>
              Beauty
            </label>
          </div>
        </div>
      </div>

      <div className={styles.sortContainer}>
        <div className={styles.sortToggle} onClick={() => toggleMenu("sort")}>
          <div>
            <ArrowDownWideNarrow />
            Sort
          </div>

          <ChevronDown
            className={`${styles.icon} ${
              openDropdown === "sort" ? styles.open : styles.closed
            }`}
          />
        </div>

        <div
          className={`${styles.sortDropdown} ${
            openDropdown === "sort" ? styles.open : styles.closed
          }`}
        >
          <div className={styles.sortContent}></div>
        </div>
      </div>
    </aside>
  );
}
export default RefinePanel;
