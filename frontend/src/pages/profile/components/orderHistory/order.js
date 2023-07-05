import styled from "styled-components/macro";

export const OrderItem = styled.div`
display: flex;
gap: 16px;
flex-direction: column;
border: 1px solid rgba(0, 0, 0, 0.3);
border-radius: 10px;
padding: 24px;
width: 528px;
position: relative;
margin-bottom:1rem;
cursor: pointer;
button{
    width: 18%;
    background: none;
    text-decoration-line: underline;
    color: #925FF0;
    line-height: 100%;
    cursor: pointer;
    border: none;
}
`
export const ArrowRight  = styled.img`
position: absolute;
right: 23px;
bottom: 25px;

`
export const Items  = styled.span`
font-weight: 500;
font-size: 14px;
line-height: 100%;
`
export const DateContainer = styled.h3`
font-weight: 500;
font-size: 14px;
line-height: 100%;
opacity: 0.5;
`

export const StatusBadge = styled.div`
position: absolute;
right: 24px;
border: 1px solid #83E281;
border-radius: 12px;
color: #464646;
padding: 5px 10px;
font-weight: 400;
font-size: 14px;
line-height: 100%;
background: #F6FFF6;

${({state})=>{
    if(state === "pending"){
        return `
        border: 1px solid rgba(0, 0, 0, 0.3);
        background: #E6E6E6;
        color: #464646;
        `
    }
    if(state === "processing"){
        return `
        border: 1px solid #5DB9FF;
        background: #EBF6FF;
        color: #15476D;
        `
    }
    if(state === "cancelled"){
        return `
        border: 1px solid #f18787;
        background: #ffd1d1;
        color: #000000;
        `
    }   
    if(state === "delivered"){
        return `
        border: 1px solid #83E281;
        background: #F6FFF6;
        color: #158212;
        `
    }
}}
`