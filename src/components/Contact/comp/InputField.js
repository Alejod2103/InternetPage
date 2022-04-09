import { InputCont,
    LabelStyled,
    InputFormStyled } from './InputFieldStyles.js';

const InputField = (props) => {
const { handleChange, label, name, type, value } = props;
return (
 <InputCont>
   <LabelStyled className="TextoLabel" htmlFor={name}>{label}</LabelStyled><br/>
     <InputFormStyled type={type} onChange={handleChange} value={value} name={name} required />
 </InputCont>
)
}
export default InputField