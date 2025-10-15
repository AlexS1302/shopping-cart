import styles from "./CheckboxGroup.module.css";

function CheckboxGroup({ options, selectedValue, onChange }) {
  return (
    <div className={styles.categoryContent}>
      {options.map(({ label, value }) => (
        <label key={value}>
          <input
            type="checkbox"
            value={value}
            checked={selectedValue === value}
            onChange={onChange}
          />
          {label}
        </label>
      ))}
    </div>
  );
}
export default CheckboxGroup;
