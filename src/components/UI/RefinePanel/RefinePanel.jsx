import { useState } from "react";
import styles from "./RefinePanel.module.css";
import { ChevronDown, LibraryBig, ArrowDownWideNarrow } from "lucide-react";

function RefinePanel() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = (menuId) => {
    setOpenDropdown((prev) => (prev === menuId ? null : menuId));
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

        {openDropdown === "category" && (
          <div
            className={`${styles.categoryDropdown} ${
              openDropdown ? styles.open : styles.closed
            }`}
          >
            <div className={styles.categoryContent}>
              <label>
                <input type="checkbox"></input>
                Furniture
              </label>
              <label>
                <input type="checkbox"></input>
                Fragrance
              </label>
              <label>
                <input type="checkbox"></input>
                Home Decor
              </label>
              <label>
                <input type="checkbox"></input>
                Skincare
              </label>
              <label>
                <input type="checkbox"></input>
                Beauty
              </label>
            </div>
          </div>
        )}
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

        {openDropdown === "sort" && (
          <div
            className={`${styles.sortDropdown} ${
              openDropdown ? styles.open : styles.closed
            }`}
          >
            <div className={styles.sortContent}></div>
          </div>
        )}
      </div>
    </aside>
  );
}
export default RefinePanel;
