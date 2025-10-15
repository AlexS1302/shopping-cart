import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import styles from "./RefinePanel.module.css";
import { LibraryBig, ArrowDownWideNarrow } from "lucide-react";
import Dropdown from "../../../UI/Dropdown/Dropdown";
import CheckboxGroup from "../../../UI/CheckboxGroup/CheckboxGroup";
import categoryOptions from "../../../../data/categoryOptions";

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
      <Dropdown
        id="category"
        label="Category"
        icon={<LibraryBig />}
        openDropdown={openDropdown}
        toggleMenu={toggleMenu}
      >
        <div className={styles.categoryContent}>
          <CheckboxGroup
            options={categoryOptions}
            selectedValue={category}
            onChange={handleCheckboxChange}
          />
        </div>
      </Dropdown>

      <Dropdown
        id="sort"
        label="Sort"
        icon={<ArrowDownWideNarrow />}
        openDropdown={openDropdown}
        toggleMenu={toggleMenu}
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
      </Dropdown>
    </aside>
  );
}
export default RefinePanel;
