import React from "react";
import styled from "styled-components";

const FlieBoxContainer = styled.div`
  width: 20rem;
  height: 25rem;
  border: 2px solid #107c41;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
`;
const ChooseFileButton = styled.button`
  padding: 1rem 2rem;
  background-color: #107c41;
  color: white;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
`;

const FileBox = () => {
  return (
    <FlieBoxContainer>
      <ChooseFileButton>Choose your file</ChooseFileButton>
    </FlieBoxContainer>
  );
};

export default FileBox;
