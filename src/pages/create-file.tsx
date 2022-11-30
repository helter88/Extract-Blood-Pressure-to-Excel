import React from "react";
import styled from "styled-components";
import CenterBox from "../components/boxes/center-box";
import NewFileBox from "../components/boxes/new-file-box";
import InputBox from "../components/boxes/input-box";

export const CreateFileContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;
  padding: 0 25rem;
`;

const CreateFile = () => {
  return (
    <CreateFileContainer>
      <InputBox />
      <CenterBox />
      <NewFileBox />
    </CreateFileContainer>
  );
};

export default CreateFile;
