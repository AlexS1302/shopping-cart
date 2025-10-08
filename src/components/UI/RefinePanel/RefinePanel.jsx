import { useState } from "react";
import styles from "./RefinePanel.module.css";
import { ChevronDown, LibraryBig } from "lucide-react";

function RefinePanel() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <aside className={styles.refinePanel}>
      <div className={styles.categoryContainer}>
        <div className={styles.categoryToggle} onClick={toggleMenu}>
          <div>
            <LibraryBig />
            Category
          </div>

          <ChevronDown />
        </div>

        <div
          className={`${styles.categoryDropdown} ${
            isOpen ? styles.open : styles.closed
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
      </div>

      <div></div>
    </aside>
  );
}
export default RefinePanel;
