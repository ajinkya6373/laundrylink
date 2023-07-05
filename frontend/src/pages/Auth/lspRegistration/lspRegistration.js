import styled from "styled-components/macro";

export const PageWrapper = styled.div`
padding:60px 148px;
width:90%;
`

export const AccountSection = styled.section`
margin-bottom:40px;
display:grid;
grid-template-columns: repeat(2, 1fr);
column-gap: 40px;
`

export const LaundrySection = styled(AccountSection)``

export const TextAreaSection = styled.section`
display:flex;
flex-direction:column;
textarea{
    height: 120px;
    padding: 1rem;
}
`

export const Heading = styled.h3`
margin-bottom:40px;
font-size: 22px;
`
export const SubHeading = styled.h5`
font-size: 18px;
line-height: 130%;
margin-bottom:32px;
`

export const ImageContainer = styled.div`
  display: flex;
  gap: 20px; /* Add some gap between the images */
`;

export const Image = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 5px;
`;

export const ServiceSection = styled.section`
ul{
    display:flex;
    list-style: none;
    gap:30px;
    li{
        display: flex;
        gap: 10px;
        input{
            width:18px;
        }
    }

}
`