import React, { useContext, useState  } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../themes/themeContext";

import MarkdownEditorWindow from "./MarkdownEditorWindow";
import PreviewWindow from "./PreviewWindow";
import { DocumentContext } from "../../documents/documentContext";


/* Home screen - side bar */
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

/* The divider between editor and preview screens */
const Divider = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${({ theme }) => theme.divier}
  
`;

const Home = ({ inputRef, showSidebar }) => {
  const { theme } = useContext(ThemeContext);
  const { activeDocument } = useContext(DocumentContext);
  const [showPreview, setShowPreview] = useState(false);
  const handlePreview = () => {
    showPreview ? setShowPreview(false) : setShowPreview(true);
  };
    {console.log("Home " + Home);}
    {console.log("Theme " + theme);}
    {console.log("Show Preview " + showPreview);}
    {console.log("Set Show Preview " + setShowPreview);}
    {console.log("Handle Preview " + handlePreview);}


  return (
    <StyledHome showSidebar={showSidebar} theme={theme}>

    {activeDocument ?  ( 
      <>

      <MarkdownEditorWindow ref={inputRef} showPreview={showPreview} />
      <Divider theme={theme}/>
      <PreviewWindow showPreview={showPreview} handlePreview={handlePreview} />
      </>
    ) : (
      <div>Hello World</div>
    )}
    </StyledHome>
  );
};

Home.displayName = "Home";
export default Home;