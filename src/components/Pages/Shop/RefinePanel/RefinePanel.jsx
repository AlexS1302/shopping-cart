import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import styles from "./RefinePanel.module.css";
import { ChevronDown, LibraryBig, ArrowDownWideNarrow } from "lucide-react";

function RefinePanel() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = (menuId) => {
    setOpenDropdown((prev) => (prev === menuId ? null : menuId));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const newCategory = checked ? value : "";

    const params = new URLSearchParams(searchParams);
    if (newCategory) {
      params.set("category", newCategory);
      params.delete("q");
    } else {
      params.delete("category");
    }

    params.set("skip", "0");
    navigate(`/shop?${params.toString()}`);
    toggleMenu(null);
  };

  const handleSortSelect = (selectedSort) => {
    const params = new URLSearchParams(searchParams);
    if (selectedSort) {
      params.set("sort", selectedSort);
    } else {
      params.delete("sort");
    }

    params.set("skip", "0");
    navigate(`/shop?${params.toString()}`);
    toggleMenu(null);
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
                checked={category === "furniture"}
                onChange={handleCheckboxChange}
              ></input>
              Furniture
            </label>
            <label>
              <input
                type="checkbox"
                value="fragrances"
                checked={category === "fragrances"}
                onChange={handleCheckboxChange}
              ></input>
              Fragrance
            </label>
            <label>
              <input
                type="checkbox"
                value="home-decoration"
                checked={category === "home-decoration"}
                onChange={handleCheckboxChange}
              ></input>
              Home Decor
            </label>
            <label>
              <input
                type="checkbox"
                value="skin-care"
                checked={category === "skin-care"}
                onChange={handleCheckboxChange}
              ></input>
              Skincare
            </label>
            <label>
              <input
                type="checkbox"
                value="beauty"
                checked={category === "beauty"}
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
          <div className={styles.sortContent}>
            <div onClick={() => handleSortSelect("price-asc")}>
              Price: Low to High
            </div>
            <div onClick={() => handleSortSelect("price-desc")}>
              Price: High to Low
            </div>
            <div onClick={() => handleSortSelect("rating-desc")}>Rating</div>
            <div onClick={() => handleSortSelect("title-asc")}>A to Z</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
export default RefinePanel;
