import { InputWrapper } from "./inputBox";

export default function InputBox({ type, placeholder, label,id, required,...rest }) {
  return (
    <InputWrapper required ={required}> 
      <label htmlFor={id}>{label} </label>
      <input type={type} placeholder={placeholder} name={id} id={id} {...rest}  />
    </InputWrapper>
  );
}
