import styled from "styled-components/macro";

export const PageWrapper = styled.section`
display:flex;
gap:60px;
flex-wrap:wrap;
padding: 0px 84px;
// justify-content: center;
margin-bottom:2rem;

`
export const Heading = styled.h1`
margin:20px 80px; 
font-size: 22px;

`
export const CardWrapper = styled.div`
border: 1px solid rgba(0, 0, 0, 0.3);
border-radius: 10px;
padding:20px 40px;
`
export const HeadingWrapper = styled.div`
display:flex;
justify-content: space-between;
margin-bottom: 24px;
`
export const CardTop = styled.div`
display:flex;
justify-content: space-between;
margin-bottom: 24px;
align-items: center;

`

export const CardBottom = styled.div`
ul{
    display:flex;
    list-style:none;
    flex-direction:column;
    gap:10px;
    li{
        display: flex;
        justify-content: space-between;
        div{
            display: flex;
            gap: 11px;
            margin-right:25px;
        }
    }
    input[type="number"]{
        border: 1px solid #000000;
        border-radius: 5px;
        width: 80px;
        padding:5px;
    }
    input[type="checkbox"]{
        width: 18px;
    }
    
}
`
export const Button = styled.button`
    background: var(--primary--b);
    padding: 12px 24px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    color: var(--secondary--text);
    letter-spacing: -0.05em;
    text-transform: capitalize;
    font-size: 16px;
    line-height: 100%;
    &:hover {
        background: var(--secondary--b);
        color: var(--secondary--text-hover);
      }
    margin-left:84px;
    margin-bottom:20px;

`