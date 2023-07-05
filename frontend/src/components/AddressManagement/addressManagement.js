import styled from "styled-components/macro";

export const BtnContainer = styled.div`
display: flex;
    margin-top: 1rem;
    flex-wrap: wrap;
button{
    text-decoration: none;
    display: inline-block;
    border-radius: 0.3rem;
    background-color: transparent;
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
    border: 1px solid #d8d8da;;
    padding: 0.5rem 1rem;

    :nth-child(1) {
        background-color: var(--primary--b);
        color:white;
        border: none;
        margin-right: 0.625rem;
      }
    
    :nth-child(2){
        &:hover{
            background-color:#8e8f98d9;
        }
    }
    :disabled {
        opacity: 0.4;
      }
}
`