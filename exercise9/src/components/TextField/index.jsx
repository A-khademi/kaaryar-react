import './style.css';
function TextField({
    label,
    value,
    onChange,
    errors=[],
    id,
    type='text'
}){
    function handleChange(event){
        onChange(event.target.value)
    }
 return(
    <div className="text-field">
        <label htmlFor={id} className="text-field__label">{label}</label>
        <input value={value} onChange={handleChange} type={type} id={id} className="text-field__controller"/>
        {errors.map((error)=>(<p className='text-field__error'>{error}</p>))}
    </div>
 )
}

export default TextField;