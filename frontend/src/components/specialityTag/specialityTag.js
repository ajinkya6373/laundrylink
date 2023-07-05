import styled, { css } from "styled-components/macro"

export const TagWrapper = styled.div`
display: flex;
align-items: center;
gap: 8px;
background: var(--secondary--b);
opacity: 0.9;
border-radius: 5px;
padding: 8px;
font-size: 16px;
img{
    width: 20px;
    height: 20px;
}

${(props)=>{
    if(props.small){

        return css`
        font-size: 12px;
        padding: 4px;
        `
    }
}}

`