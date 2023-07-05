
import { useState,useRef } from "react";
import {
    Input, Wrapper,
    ErrorMsg
} from "./forminput"

export default function FormInput(props) {
    const [focused, setFocused] = useState(false);
    const {label,onChange,id,errorMessage,...other} = props;
    const formRef = useRef();
    const handleFocus = () => {
        setFocused(true);
      };

  return (
    <Wrapper>
      <label>{label}</label>
        <Input {...other} onChange={onChange} onBlur={handleFocus}  focused={focused} ref={formRef} />
        <ErrorMsg><img  src="/assets/Icons/error.svg" alt="errorIcon"/>{errorMessage}</ErrorMsg>
    </Wrapper>
  )
}
