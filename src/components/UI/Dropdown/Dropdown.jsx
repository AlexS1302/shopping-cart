import styles from "./Dropdown.module.css";
import { ChevronDown } from "lucide-react";

function Dropdown({ id, label, icon, openDropdown, toggleMenu, children }) {
  const isOpen = openDropdown === id;

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownToggle} onClick={() => toggleMenu(id)}>
        <div>
          {icon}
          {label}
        </div>
        <ChevronDown
          className={`${styles.icon} ${isOpen ? styles.open : styles.closed}`}
        />
      </div>

      <div
        className={`${styles.dropdownBody} ${
          isOpen ? styles.open : styles.closed
        }`}
      >
        {children}
      </div>
    </div>
  );
}
export default Dropdown;
