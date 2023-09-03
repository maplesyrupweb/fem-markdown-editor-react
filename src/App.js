import React from "react";

/*
The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
*/

import { useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto', sans-serif;
  }
`;

const StyledApp = styled.div``;

const App = () => {

  const inputRef = useRef(null);

  const handleEnter = () => {
    inputRef.current.focus();
    console.log(inputRef.current);
  };

  return (
    <>
      <GlobalStyle />
      <StyledApp>
      <Navigation handleEnter={handleEnter} />
        <Home ref={inputRef} inputRef={inputRef} handleEnter={handleEnter} />
      </StyledApp>
    </>
  );
};

export default App;