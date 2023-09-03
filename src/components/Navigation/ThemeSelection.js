import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../themes/themeContext";

const StyledThemeSelection = styled.div``;

/*main is defined in themes.js */
/*fix issue of button not changing background color*/

const TestThemeButton = styled.button`
  color: ${(props) => props.theme.color.markdownbody};
  background-color: ${(props) => props.theme.background.main};
`;

const ThemeSelection = () => {
  const { theme, handleThemeChange } = useContext(ThemeContext);

  return (
    <StyledThemeSelection theme={theme}>
      {console.log("the theme color is: ")}
      {console.log(theme.color)}
      
      <TestThemeButton theme={theme} onClick={() => handleThemeChange()}>
        {theme.name}
      </TestThemeButton>
    </StyledThemeSelection>
  );
};

export default ThemeSelection;