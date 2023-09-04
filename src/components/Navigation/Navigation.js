import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar"; 

const StyledNavigation = styled.div``;


const Navigation = ({ showSidebar, handleSidebar, handleEnter }) => {
  return (
    <StyledNavigation>
      <Sidebar showSidebar={showSidebar} />
      <Navbar 
        handleEnter={handleEnter} 
        showSidebar={showSidebar}
        handleSidebar={handleSidebar}
        />
    </StyledNavigation>
  );
};

export default Navigation;