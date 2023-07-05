// toast.js

import styled from "styled-components/macro";

export const ToastContainer = styled.div`
  position: fixed;
  top: 7.4rem;
  right: 2.5rem;
  height: 40px;
  background: ${(props) =>
    props.toastType === "add"
      ? "#000000"
      : props.toastType === "update"
      ? "green"
      : "#B00020"};
  opacity: 0.8;
  border-radius: 5px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding:1rem;
`;

export const Image = styled.img`
  width: 28px;
  height: 32px;
  border-radius: 5px;
  margin-right: 12px;
  margin-left: 8px;
  object-fit: contain;
`;
