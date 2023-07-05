import styled from "styled-components/macro";
export const PageWrapper = styled.div`
width:60%;
`
export const AddressContainer = styled.div`
  background-color: #f8f8f8;
  border: 2px dashed var(--secondary-color);
  border-radius: 4px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 1rem;
`;

export const AttributeContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const AttributeName = styled.div`
  font-weight: bold;
  width: 120px;
`;

export const AttributeValue = styled.div`
  flex-grow: 1;
`;

export const EditButton = styled.img`
  position: absolute;
  top: 10px;
  right: 13px;
  width: 3.5%;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
position: absolute;
top: 10px;
right: 40px;
width: 4%;
cursor: pointer;
`

export const AddAddressButton = styled.button`
border: 1px solid #CC3D5F;
border-radius: 5px;
font-weight: 500;
font-size: 10px;
line-height: 12px;
color: #CC3D5F;
background: none;
padding: 8px 10px 8px 10px;
cursor: pointer;
width: 100%;
margin: 2rem 0;
&:hover {
  background-color: #CC3D5F;
  color: #fff;
}
`