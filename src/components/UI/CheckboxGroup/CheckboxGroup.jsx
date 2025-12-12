function CheckboxGroup({ options, selectedValue, onChange }) {
  return (
    <>
      {options.map(({ label, id, value }) => (
        <label key={value}>
          <input
            type="checkbox"
            id={id}
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
