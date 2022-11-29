import React from "react";
import CenterBox from "../components/center-box";
import FileBox from "../components/file-box";
import InputBox from "../components/input-box";
import { CreateFileContainer } from "./create-file";

const AddToFile = () => {
  return (
    <CreateFileContainer>
      <InputBox />
      <CenterBox />
      <FileBox />
    </CreateFileContainer>
  );
};

export default AddToFile;
