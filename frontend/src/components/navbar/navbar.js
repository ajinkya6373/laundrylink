import styled, { css } from "styled-components/macro";

export const NavHeader = styled.header`
padding: 18px 80px;
border-bottom: 1px solid var(--primary--b);
line-height: 100%;
font-weight: 400;
font-size: 20px;
letter-spacing: -0.05em;
position: sticky;
top: 0;
z-index: 9999999;
background: #ffffff;

${(props) => {
        if (props.home) {
            return css`
        background-color: #08050D;
        color:var(--secondary--text);
        border:none;
        `
        }
    }}

`
export const Logo = styled.img`
padding-top: 12px;
cursor:pointer;
`
export const Nav = styled.nav`
display:flex;
`
export const NavList = styled.ul`
display:flex;
flex:${props => props.flex};
margin-left:64px;
list-style: none;
`
export const NavListItem = styled.li`
margin-right: 64px;
padding-top: 12px;
cursor:pointer;
`
export const NavButton = styled.button`
border: none;
padding: 12px 24px;
background:${props => props.action ? "var( --primary--b)" : "none"};
border-radius:4px;
color: var(--secondary--text);
font-weight: 400;
font-size: 20px;
line-height: 100%;
cursor:pointer;
${(props) => {
        if (!props.home && !props.action) {
            return css`
        color:var(--primary--text);
        `
        }
    }}
`

export const NavLeft = styled.div`
display:flex;
gap:40px;
img{
    width:32px;
    cursor:pointer;
}

`
export const CartBadge = styled.span`
position: absolute;
    top: 22px;
    right: 158px;
    background-color: black;
    color: white;
    font-size: 11px;
    font-weight: bold;
    padding: 1px 6px;
    border-radius: 50%;
    width: 21px;
    height: 21px;
    text-align: center;
    ${(props) => {
        if (props.home) {
            return css`
            color: var(--primary--text);
            background: var(--secondary--b);
        `
        }
    }}
`;
export const ProfileIcon = styled.div`
border: 2px solid var(--primary--b);
border-radius: 50%;
height: 50px;
width: 50px;
text-align: center;
justify-content: center;
align-items: center;
display: flex;
cursor:pointer;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.05em;
`