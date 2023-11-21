"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Button from "@/app/UI/Button/Button";
export const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: fit-content;
  background-color: #111111;
  padding: 1rem 2rem;
  justify-content: space-between;

  @media (max-width: 280px) {
    padding: 1rem 1rem;
  }
  @media (min-width: 1025px) {
    padding: 1.2rem 5rem;
  }
`;

export const LogoContainer = styled.div`
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Heading = styled.h2`
  color: #f6f6f6;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 4px;
`;
export const logoText = styled.h2`
  color: #f6f6f6;
`;
export const LogoWrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;

  gap: 0.4rem;
`;
export const LogoLine = styled.div`
  background-color: #ffc23e;
  height: 100%;
  width: 1px;
`;
const NavBar = () => {
  return (
    <Nav>
      <LogoWrapper>
        <LogoContainer>
          <Image
            src="/assets/ttt.svg"
            fill={true}
            alt="Picture of the author"
          />
        </LogoContainer>
        <LogoLine></LogoLine>
        <Heading>STORIES</Heading>
      </LogoWrapper>
      <Button>Courses</Button>
    </Nav>
  );
};

export default NavBar;
