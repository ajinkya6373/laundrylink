import styled, { css } from "styled-components/macro";

export const LaundryName = styled.h3`
font-size: 20px;
line-height: 100%;
margin-bottom: 1rem;
`
export const CartWrapper = styled.div`
display:flex;
justify-content: center;
margin-top:3.75rem;
margin-bottom:3.75rem;
flex-wrap: wrap;

`

export const CartLeft = styled.div`
border-right: 1px solid #e9e9eb;
padding-right:2.5rem;

`

export const CartRight = styled(CartLeft)`
border:none;
padding-left:2.5rem;
min-width: 24%;

`
export const AddressBox = styled.div`

padding:1rem 1.5rem 1rem 1rem;
border-radius: 5px;
display: flex;
align-items: center;
margin-bottom:2.5rem;
box-shadow: inset 0 0 0 1px #e9e9eb;
p{
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    margin-top:0.5rem;
}
div{
    margin-right: 5rem;
}
`
export const AddressItem = styled.div`
margin-bottom:1rem;
display: flex;
flex-wrap: wrap;
h4{
    margin-bottom: 4px;
}
input{
    width:1rem;
    height: 1rem;
}
p{
    font-size: 0.875rem;
    margin-bottom: 4px;
    opacity: 0.8;
}

`

export const AddressInfo = styled.div`
margin-left:1rem;
`

export const Button = styled.button`
border: 1px solid black;
border-radius: 5px;
font-weight: 500;
font-size: 10px;
line-height: 12px;
color: black;
background: none;
padding:8px 10px 8px 10px;
cursor:pointer;
align-items: center;
text-align: center;
display: flex;
${(props)=>{
    if(props.action){
        
        return css`
            border-color: var(--primary--b);
            color: var(--primary--b);
        `
    }
}}
`

export const ProductBox = styled.div`
border-radius: 5px;
margin-bottom:1.5rem;
padding:1rem 0 1rem 1.12rem;
display: flex;
font-weight: 500;
font-size: 16px;
line-height: 20px;
box-shadow: inset 0 0 0 1px #e9e9eb;
img{
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
}
`

export const PBoxRight = styled.div`
margin-left:1.5rem;
display: flex;
justify-content: space-around;
align-items: center;
width: 80%;
img{
    width: unset;
    height: unset;

}
span{
    margin-left:1rem;
}
`

export const UpdateQty = styled.div`
display: flex;
align-items: center;
button{
width: 34px;
height: 28px;
font-size: 20px;
border: 0.5px solid #e9e9eb;
border-radius: 5px;
background:none;
cursor:pointer;
}
img{
    border: 0.5px solid #e9e9eb;
    border-radius: 5px;
    background: none;
    padding: 0px 7px 3px 7px;
    cursor:pointer;
}
span{
    border: 0.5px solid #e9e9eb;
    border-radius: 5px;
    background: none;
    padding: 4px 12px 3px 12px;
    margin:0px 8px 0px 8px;
}

`
export const Row = ({ label, value, Convenience, bold }) => {
    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: "14px",
        flexWrap: "wrap",
        marginBottom: "1rem",
        width: "100%"
    }}>
        <div style={{
            width: "calc(80% - 1rem)",
            fontWeight: `${bold ? "bold" : 500}`
        }}>

            {label}
        </div>
        <span style={{
            textDecorationLine: `${Convenience ? "line-through" : "none"} `,
            color: `${Convenience ? "green" : "black"}`
        }}>
            ₹{value} {Convenience && "free"}
        </span>
    </div>
}


export const PlaceButton = styled(Button)`
width: 100%;
background: var(--primary--b);
border-radius: 5px;
border:none;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
text-align: center;
display:unset;
margin-top:1.5rem;

`
