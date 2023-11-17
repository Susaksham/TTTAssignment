import React from "react";
import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  color: black;
  font-size: 1rem;
  background-color: #ffc23e;
`;
const Button = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default Button;
