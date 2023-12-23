import "./style.css";
function CheckboxGroupField({
  options = [],
  value = [],
  onChange,
  errors = [],
  label,
}) {
  function renderOptions() {
    const optionElements = options.map((option) => (
      <label className="checkbox-group-field__option" key={option.value}>
        <span>{option.label}</span>
        <input
          type="checkbox"
          id={option.value}
          value={option.value}
          onChange={() => onChange(option.value)}
          checked={value.includes(option.value)}
        />
      </label>
    ));
    return <div className="checkbox-group-field__options">{optionElements}</div>;
  }
  return (
    <div className="checkbox-group-field">
      <p className="checkbox-group-field__label">{label}</p>
      {renderOptions()}
      {errors.map((error) => (
        <p className="checkbox-group-field__error">{error}</p>
      ))}
    </div>
  );
}
export default CheckboxGroupField;
