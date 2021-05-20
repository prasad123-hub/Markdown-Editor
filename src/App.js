import React, { useState } from "react";
import styled from "styled-components";
import MarkedInput from "./components/RawInputArea";
import MarkDownResult from "./components/MarkDownSanitized";
import EditorContext from "./Context/editorContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

const App = () => {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <AppContainer>
        <Title>
          <Button color="primary">Markdown Text Editor</Button>
        </Title>
        <Title>
          <Button color="primary">
            <a
              href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
              target="_blank"
              rel="#"
            >
              Click Here To Markdown Cheat Sheet
            </a>
          </Button>
        </Title>
        <EditorContainer>
          <MarkedInput />
          <MarkDownResult />
        </EditorContainer>
      </AppContainer>
    </EditorContext.Provider>
  );
};

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: 1em;
  margin-top: 10px;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
