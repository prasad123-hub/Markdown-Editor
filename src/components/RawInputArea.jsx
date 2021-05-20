import React, { useContext } from "react";
import styled from "styled-components";
import editorContext from "../Context/editorContext";
import { Button } from "reactstrap";

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  border-right: 3px solid #0b5ed7;
  font-family: "Lato", sans-serif;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
  display: flex;
  justify-content: center;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`;

const MarkedInput = () => {
  const { setMarkdownText } = useContext(editorContext);

  const onInputChange = (e) => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  };

  return (
    <Container>
      <Title>
        <Button color="danger">Enter Your Text Here</Button>
      </Title>
      <TextArea onChange={onInputChange} />
    </Container>
  );
};

export default MarkedInput;
