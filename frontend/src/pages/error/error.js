import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  color: #777;
  margin-bottom: 2rem;
`;

export const Image = styled.img`
  width: 350px;
  height: auto;
  margin-bottom: 2rem;
`;

export const Link = styled.a`
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
`;