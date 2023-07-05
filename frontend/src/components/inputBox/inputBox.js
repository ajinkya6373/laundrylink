import styled, { css } from "styled-components/macro";

export const InputWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
margin-top: 24px;

label{
    position: relative;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    width: fit-content;

 
${({ required }) => {
        if (required) {
            return css`
        &::after {
            content: "*";
            color: red;
            position: absolute;
            right: -10px;
            top: 0;
          }
        `
        }
    }}


 
}
input{
    padding: 0px 12px;
    background: #F2F2F2;
    border-radius: 5px;
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;
    width: 350px;
    height: 36px;
    border: none;
    outline: none;
    border-bottom: 2px solid #ccc;
    transition: border-bottom-color 0.3s ease;
    &:focus {
        border-bottom-color: var(--primary--b);
        }
    &[disabled] {
        border: none;
        }
}

`