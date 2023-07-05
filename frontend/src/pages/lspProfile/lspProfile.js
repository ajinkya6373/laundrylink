import styled from "styled-components/macro";
export const ProfileWrapper = styled.div`
display: flex;
`
export const ProfileLeft = styled.div`
padding: 80px;
flex:0.5;
border-right: 1px solid #e6e6e6;
ul {
    list-style: none;
    display: flex;
    gap: 80px;
    flex-direction: column;
    li{
        font-size: 16px;
        line-height: 100%;
        opacity: 0.7;
        cursor: pointer;
    }
    li.active {
        text-decoration-line: underline;
        opacity: 1;
      }
}
`
export const ProfileRight = styled.div`
padding: 80px;
flex:2;
`
export const Heading = styled.h2`
text-align: center;
`