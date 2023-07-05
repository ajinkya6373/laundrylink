import styled from "styled-components/macro";
export const Wrapper = styled.div`
margin-bottom: 1rem;
width:100%;

`

export const ErrorMsg = styled.span`

margin-top:2px;
display:none;
align-items: center;
font-size: 10px;
line-height: 12px;
color: #EA052F;
img{
    margin-right:4px;
}



`

export const Input = styled.input`
width: 100%;
display: block;
padding: 0.5rem;
border: 1px solid #d4d5d9;
border-radius: 0.3rem;
line-height: 1.5;
outline: none;
box-sizing: border-box;
&:invalid ~${ErrorMsg}{
    display:${props=>props.focused===true?"flex":"none"} ;
}

`