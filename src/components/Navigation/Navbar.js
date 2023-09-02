import React from "react";
import styled from "styled-components";

const StyledNavbar = styled`
width: 100vw;
height: 72px;
`;

const TestThemeButton = styled.button``;

const Navbar = () => {
  return <StyledNavbar>
    Hello World 
    <TestThemeButton>Test Me</TestThemeButton>
  </StyledNavbar>;
};

export default Navbar;