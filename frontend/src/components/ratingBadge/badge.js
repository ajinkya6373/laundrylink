import styled,{css}from "styled-components/macro";

export const BadgeWrapper  = styled.div`
    background: ${props => {
        if (props.rating >= 4) {
            return '#44AB42'; // green color for Excellent rating
        } else if (props.rating >= 3) {
            return '#FFBF00'; // yellow color for Average rating
        } else {
            return '#E50000'; // red color for Poor rating
        }
    }};
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 4px 8px;
    gap: 8px;
    color: var(--secondary--text);
    width: 77.11px;
    height: 34px;
    justify-content: center;
    font-size: 20px;
   
    ${(props)=>{
        if(props.small){
            return css`
            font-size: 12px;
            width: 37.07px;
            height: 24px;
            gap: 4px;
            img{
                width: 10.07px;
                height: 10px;
            }
            `
        }
    }}

`
