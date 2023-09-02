import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
/* dark and light theme */
import { dark } from "./themes/themes.styled";

// import Navigation from "./components/Navigation/Navigation";

const StyledComponent = styled``;
const TestThemeButton = styled.button``;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color}
  }
`;
const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <StyledComponent>
        Hello World
        <TestThemeButton>Test Me</TestThemeButton>
      {/* <Navigation></Navigation> */}
      </StyledComponent>
    </ThemeProvider>
  );
}
export default App;
