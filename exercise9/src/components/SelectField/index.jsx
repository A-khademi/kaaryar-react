import "./style.css";
function SelectField({ label, value, onChange, options = [], errors = [] }) {
    function handleChange(event){
        onChange(event.target.value)
    }
  return (
    <div className="select-field">
      <label>{label}</label>
      <select value={value} onChange={handleChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      {errors.map((error) => (
        <p className="select-field__error">{error}</p>
      ))}
    </div>
  );
}
export default SelectField;
