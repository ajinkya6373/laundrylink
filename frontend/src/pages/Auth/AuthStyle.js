import styled from "styled-components/macro";

export const PageWrapper = styled.div`
display: flex;
justify-content: space-between;
`
export const PageRight = styled.form`
padding: 80px;
h1{
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;
}
`
export const PageLeft = styled.div`
  position: relative;

  img {
    width: 720px;
    height: 86vh;
    display: block;
    object-fit: cover;
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #FFFFFF 14.17%, rgba(255, 255, 255, 0) 27.03%);
    z-index: 1;

  }
`;


export const SubText = styled.div`
font-size: 12px;
line-height: 16px;
color: #757575;
margin-top: 12px;
width: 350px;
display: flex;
align-items: center;
gap: 8px;
`
export const SubTextLink = styled(SubText)`
justify-content: space-between;
text-decoration: underline;
span{
    cursor: pointer;
}

`
export const Button = styled.button`
background: var(--primary--b);
padding: 12px 24px;
border-radius: 4px;
border: none;
width: ${props=>props.width? "auto":"350px"};
height: 40px;
cursor: pointer;
color: var(--secondary--text);
margin-top: 40px;
letter-spacing: -0.05em;
text-transform: capitalize;
font-size: 16px;
line-height: 100%;
:disabled{
  opacity:0.6;
  cursor: not-allowed;
}

`