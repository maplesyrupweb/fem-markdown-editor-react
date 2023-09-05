import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../themes/themeContext";

import MarkdownEditorWindow from "./MarkdownEditorWindow";
import PreviewWindow from "./PreviewWindow";

const StyledHome = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  width: 100%;
  position: fixed;
  color: ${(props) => props.theme.color.markdownbody};
  background-color: ${(props) => props.theme.background.main};
  transform: translateX(
    ${({ showSidebar }) => (showSidebar ? "250px" : "0px")}
  );
  transition: 0.3s;
`;

/*background-color: #5a6069;*/
const Divider = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${({ theme }) => theme.divier}
`;

const Home = ({ inputRef, showSidebar }) => {
  const { theme } = useContext(ThemeContext);
  // {console.log(Home);}
  //   {console.log(theme);}
  return (
    <StyledHome showSidebar={showSidebar} theme={theme}>
      <MarkdownEditorWindow ref={inputRef} />
      <Divider theme={theme}/>
      <PreviewWindow />
    </StyledHome>
  );
};

Home.displayName = "Home";
export default Home;