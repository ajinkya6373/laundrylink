import styled, { css } from "styled-components/macro";

export const MpageWrapper = styled.div`
display:flex;
padding:40px 80px;
`

export const PageLeft = styled.div`

`
export const LargeImage = styled.img`
width: 600px;
height: 340px;
object-fit: cover;
border-radius: 5px;
`
export const SmallImgWrapper = styled.div`
display: flex;
gap: 26px;
margin-top: 24px;
img{
    width: 130px;
    height: 130px;
    border-radius: 5px;
    object-fit: cover;
}
`

export const BtnContainer = styled.div`
display:flex;
margin-top:40px;
gap:37px;
`
export const Button = styled.button`
display: flex;
cursor: pointer;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 40px;
gap: 8px;
border-radius: 4px;
letter-spacing: -0.05em;
font-size: 20px;
line-height: 100%;
opacity: 0.2;
${(props) => {
        if (props.action) {
            return css`
        background: var(--primary--b);
        color:var(--secondary--text);
        opacity: unset;
        border:none;
        `
        }
    }}
`

export const PageRight = styled.div`
margin-left:46px;
margin-bottom:80px;
overflow-x: scroll;
height: 100vH;
h1{
    letter-spacing: -0.05em;
    opacity: 0.9;
    font-weight: 600;
    font-size: 40px;
    line-height: 100%;
}
`

export const RatingContainer = styled.div`
display:flex;
gap: 12px;
align-items: center;
margin: 16px 0px;
p{
    opacity: 0.6;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
}
`
export const DistanceContainer = styled.div`
display: flex;
gap: 8px;
align-items: center;
opacity: 0.8;
letter-spacing: -0.05em;
font-size: 16px;
`

export const LspInfo = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
margin-top: 32px;
`
export const SpecialityContainer = styled.div`
display: flex;
gap:24px;
`


export const CategoryContainer = styled.div`
margin-top: 64px;

`

export const ViewAllButton = styled.button`
width: 100%;
border: 2px solid var(--primary--b);
border-radius: 4px;
background: none;
padding: 22px;
font-weight: 600;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.05em;
color: var(--primary--b);
cursor: pointer;
`

export const HedingWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 27px; 
font-weight: 600;
font-size: 20px;
line-height: 130%;
span{
    font-weight: 600;
    font-size: 16px;
    line-height: 130%;
    text-decoration-line: underline;
    cursor:pointer;
}
`

export const ReviewBox = styled.div`
padding:16px;
border: 1px solid rgba(0, 0, 0, 0.3);
border-radius: 5px;
margin-top:48px;
button{
    background: none;
    border: none;
    text-decoration: underline;
    letter-spacing: -0.05em;
    line-height: 100%;
    cursor: pointer;

    
}
`
export const Review = styled.div`
border-top: 1px solid #0000003b;
padding: 24px 0px;
display: flex;
flex-direction: column;
gap: 12px;
p{
    opacity: 0.7;
    ont-size: 16px;
    line-height: 130%;
}

`
export const ReviewTop = styled.div`
display: flex;
gap: 8px;
`
export const ReviewBottom = styled(ReviewTop)`
gap:12px;
font-size: 14px;
line-height: 130%;
color: #000000;
opacity: 0.5;
`