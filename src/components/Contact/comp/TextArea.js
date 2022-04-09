const TextareaField = (props) => {
    const { handleChange, label, name, value } = props;
    return (
      <div>
        <label className="label" htmlFor={name}>{label}</label>
        <textarea onChange={handleChange} name={name} rows="4" className="textArea" value={value}></textarea>
      </div>
    )
  }
  
  export default TextareaField;