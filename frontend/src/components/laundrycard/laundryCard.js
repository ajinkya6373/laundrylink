import styled from "styled-components/macro";

export const CardWrapper = styled.div`
box-shadow: 0px 4px 8px rgba(41, 41, 41, 0.08);
border-radius: 16px;
margin-right:80px;
position:relative;
cursor:pointer;
`
export const CardTop = styled.div``
export const Image = styled.img`
    width: 240;
    height: 169px;
    border-radius: 16px 16px 0px 0px;
`
export const RatingBadge = styled.div`
position: absolute;
width: 56px;
height: 28px;
background: var(--secondary--text);
border-radius: 10px;
left: 8px;
top: 8px;
display: flex;
align-items: center;
justify-content: center;
`
export const CardBottom = styled.div`
padding:12px 16px;
h1{
    opacity: 0.9;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.05em;
    margin-bottom: 8px;
}
p{
    font-weight: 400;
    font-size: 12px;
    line-height: 125.5%;
    opacity: 0.6;
    letter-spacing: -0.05em;
}
`
export const CardFooter = styled.div`
display: flex;
justify-content: space-between;
margin-top:14px;
`
export const Distance = styled.div`
display: flex;
span{
    opacity: 0.7;
    letter-spacing: -0.05em;
    margin-left: 8px;
}
`
export const PriceContainer = styled.div`
letter-spacing: -0.05em;
    span{
        font-size: 10px;
        line-height: 100%;
        opacity: 0.6;
    }
`