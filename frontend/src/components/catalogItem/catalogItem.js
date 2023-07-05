import styled from "styled-components/macro";

export const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 16px 32px;
    margin-bottom: 24px;
}
`

export const ItemLeft = styled.div`
display: flex;
gap: 24px;
img{
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 50%;
}
`
export const NamePrice = styled.div`
display: flex;
flex-direction:column;
gap: 10px;
font-size: 20px;
line-height: 130%;
div{
    letter-spacing: -0.05em;
    color: #08050D;
    opacity: 0.9;
    font-size: 16px;
    span{
        letter-spacing: -0.05em;
        color: #08050D;
        font-size: 10px;
        opacity: 0.6;
    }
}
`

export const ItemRight = styled.div`
align-items: center;
display: flex;
gap: 24px;
div{
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid black;
    text-align: center;
    line-height: 30px;
    cursor:pointer;
}
span{
    display: inline-block;
    vertical-align: middle;
}

button{
    padding: 12px 24px;
    background: var(--secondary--b);
    border: 1px solid var(--primary--b);;
    border-radius: 4px;
    cursor: pointer;
    letter-spacing: -0.05em;
    text-transform: capitalize;
    color: var(--primary--b);
    font-size: 16px;
}
`
