
function SelectField({
    label,
    value,
    onChange,
    options,
    errors=[]
}){
return(
    <div className="select-field">
        <label>{label}</label>
        <select value={value} onChange={onChange}>
    {options.map((options)=>(
        <option value={option.value}>{option.label}</option>
    )
    )}
        </select>
        {errors.map((error)=>(<p className="select-field__error"></p>))}
    </div>
)
}
export default SelectField;