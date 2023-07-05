import styled from "styled-components/macro";

export const ModalWrapper = styled.div`
`

export const ModalTop = styled.div`
display:flex;
justify-content:space-between;
border-bottom: 1px solid #0000003b;
padding-bottom: 24px;
margin-bottom: 24px;
button{
    background: none;
    border: 1px solid black;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    cursor:pointer;
}
`
export const NameSection = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
`

export const IncrementDecrement = styled.div`
display: flex;
flex-direction: column;
gap: 13px;
span{
    text-align: end;
    font-weight: 600;
    font-size: 18px;
    color: #08050D;
}
button{
    background: none;
    border: 1px solid black;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    cursor:pointer;
}
div{
    display: flex;
    gap: 16px;
}
`

export const ButtonSections = styled.div`
  display: flex;
  gap: 17px;
  margin-top: 24px;
  margin-bottom: 40px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    span {
      ::after {
        content: "/pcs";
        letter-spacing: -0.05em;
        color: #08050d;
        opacity: 0.6;
      }
    }
  }
`;

export const ServiceButton = styled.button`
padding: 5px 17px;
border-radius: 5px;
font-weight: 500;
font-size: 14px;
border: ${({ selected }) =>
selected ? "none" : "1px solid #0000003b"};
background: ${({ selected }) =>
  selected ? "var(--secondary--b)" : "white"};
cursor: pointer;

`

export const TextArea = styled.textarea`
width: 387px;
height: 92px;
margin-top: 32px;
padding: 12px;
outline: none;
border-radius: 10px;
display: inherit;
`

export const ActionButton = styled.button`
padding: 12px 24px;
gap: 5px;
background: var(--primary--b);
border-radius: 4px;
cursor:pointer;
margin-top: 24px;
border: none;
color: white;
font-size: 16px;
&:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
`
export const Heading = styled.h4`
font-weight: 600;
font-size: 20px;
line-height: 100%;
`

export const StarRatingContainer = styled.div`
  display: inline-block;
  transition: color 0.2s;
  cursor: pointer;
`;

export const Star = styled.span`
  font-size: 25px;
  color: ${({ isActive }) => (isActive ? "#ffc107" : "#e4e5e9")};
  transition: color 0.2s;
  margin-right:8px;
  cursor: pointer;

`;
