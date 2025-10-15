function CheckboxGroup({ options, selectedValue, onChange }) {
  return (
    <>
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
    </>
  );
}
export default CheckboxGroup;
