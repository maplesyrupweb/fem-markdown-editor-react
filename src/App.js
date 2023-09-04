import React, { useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

/*
The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
*/

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;

  }
`;

const StyledApp = styled.div``;

const App = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  const inputRef = useRef(null);

  /* If showSideBar, return False, Else, return true */

  const handleSidebar = () => {
    setShowSidebar(showSidebar ? false : true);
  };

  
  const handleEnter = () => {
    inputRef.current.focus();
    console.log(inputRef.current);
  };

  return (
    <>
      <GlobalStyle />
      <StyledApp>
      <Navigation
          showSidebar={showSidebar}
          handleSidebar={handleSidebar}
          handleEnter={handleEnter}
        />
        <Home ref={inputRef} inputRef={inputRef} showSidebar={showSidebar} />
      </StyledApp>
    </>
  );
};

export default App;