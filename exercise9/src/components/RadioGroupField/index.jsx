import './style.css';
function RadioGroupField({
  options = [],
  value,
  onChange,
  errors = [],
//   name,
  label,
}) {
 
  function renderOptions () {
    return options.map((option) => (
      <label key={option.value}>
        <span>{option.label}</span>
        <input
          type="radio"
          id={option.value}
          value={option.value}
          onChange={()=>onChange(option.value)}
          checked={value===option.value}
        />
      </label>
    ));
  }
  return (
    <div className="radio-group-field">
      <p className="radio-group-field__label">{label}</p>
      {renderOptions ()}
      {errors.map (error => (
        <p className="radio-group-field__error">{error}</p>
      ))}
    </div>
  );
}
export default RadioGroupField;
