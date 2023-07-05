import styled from "styled-components/macro";

export const HeroSection = styled.section`
display: flex;
padding:40px 80px;
background:#08050D;
color:var(--secondary--text);
flex-wrap: wrap-reverse;
p{
font-weight: 400;
font-size: 18px;
margin-top:2rem;
letter-spacing: -0.05em;
text-transform: capitalize;
}
`

export const Heading = styled.h1`
font-size: 60px;
line-height: 127%;
letter-spacing: -0.05em;
text-transform: capitalize;
span{
    color:var(--primary--b);
}
`

export const HeroImg = styled.img`
margin-left: 6rem;
width:40rem;
`
export const SignupButton = styled.button`
padding: 16px 24px 16px 32px;
border-radius: 52px;
background:var(--primary--b);
cursor:pointer;
color:var(--secondary--text);
margin-top:2rem;
font-weight: 500;
font-size: 20px;
`
export const CardSection = styled.section`
padding:65px 80px;
`
export const CardWrapper = styled.div`
display: flex;
overflow-Y: scroll;
`
export const HeadingWrapper = styled.div`
display:flex;
justify-content:space-between;
margin:30px 0px;

h1{
    font-weight: 500;
    font-size: 24px;
    line-height: 130%;
    opacity: 0.9;
    letter-spacing: -0.05em;
}
button{
    border: none;
    background: none;
    text-decoration: underline;
    font-weight: 600;
    font-size: 20px;
    line-height: 130%;
    cursor:pointer;

`

export const InfoSection = styled.div`
background: #08050D;
color: var(--secondary--text);
text-align: center;
padding: 40px;

h1{
    span{
        color: var(--primary--b);
    }
}
`
export const InfoContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 64px;
gap: 100px;

`

export const IconWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

p{
    margin-top:36px;
    font-size: 16px;
    line-height: 125%; 
    font-weight: 400;   
    span{
        font-weight: 700;
    }
}
`
export const Icon = styled.div`
background: var(--secondary--b);
width: 100px;
height: 100px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;

`

export const ServiceSection = styled.section`
padding:64px 80px;
h2{
    margin-bottom:70px;
    opacity: 0.9;
    letter-spacing: -0.05em;
    font-weight: 500;
}
`

export const ServiceWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`
export const ServiceLeft = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-gap: 40px;
margin-right:153px;


`

export const Item = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px 50px;
gap: 24px;
box-shadow: 0px 4px 8px rgba(41, 41, 41, 0.08);
border-radius: 16px;
align-items: center;
cursor:pointer;
span{
    letter-spacing: -0.05em;
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
}


`
export const ServiceRight = styled.div`
display: flex;
margin-right: 67px;
max-width: 600px;
flex-direction: column;
gap: 10px;
img{
    width: 600px;
    height: 280px;
    object-fit: cover;
    margin-bottom:18px;
}
p{
    font-size: 18px;
    line-height: 130%;
    opacity: 0.7;
}
h1{
    font-size: 20px;

}

`

export const LspSection = styled.section`
display: flex;
background: #08050D;
color: var(--secondary--b);
img{
    width: 533px;
    height: 320px;
}
`
export const LspLeft = styled.div`
padding: 40px 40px 40px 80px;
h1{
    letter-spacing: -0.05em;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
}
p{
    font-size: 18px;
    line-height: 130%;
    opacity: 0.8;
    margin-bottom: 40px;
    margin-top: 24px;
}
button{
    padding: 16px 24px 16px 32px;
    border-radius: 4px;
    background: var(--primary--b);
    letter-spacing: -0.05em;
    color: #FFFFFF;
    font-size: 20px;
    line-height: 100%;
}
`