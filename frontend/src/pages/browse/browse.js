import styled from "styled-components/macro";

export const BrowseWrapper = styled.div` 
padding: 40px;
display: flex;
gap: 80px;

`
export const PageLeft = styled.div`
flex:1;
h3{
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 27px;
}
`

export const ServicesBox = styled.div`
padding: 20px 80px 80px 20px;
border: 1px solid #D9D9D9;
border-radius: 10px;
h4{
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 24px;

}
ul{
    list-style: none;
    li{
        display: flex;
        gap:15px;
        margin-bottom: 16px;
    }
}
input[type='checkbox'] {
    width: 16px;
    accent-color: var(--primary--b);
}
`

export const PageRight = styled.div`
flex: 4;
display: flex;
flex-direction: column;
`
export const DropdownWrapper = styled.div`
margin-bottom: 1rem;
select{
    float: right;
    padding: 8px 12px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 10px;
}
`
export const Card = styled.div`
display: flex;
gap: 41px;
border: 1px solid rgba(0, 0, 0, 0.3);
border-radius: 10px 5px 5px 10px;
margin-bottom: 40px;
`
export const CardImg = styled.div`
img{
    width: 200px;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;
}

`
export const CardInfo = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
align-items: center;
padding: 20px 80px 20px 20px;
h2{
    font-size: 20px;
    margin-bottom: 16px;
}
`
export const TagWrapper = styled.div`
display: flex;
gap: 10px;
`

export const PriceBox = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
font-weight: 400;
font-size: 16px;
opacity: 0.6;
span{
    font-weight: 600;
    font-size: 24px;
}
`