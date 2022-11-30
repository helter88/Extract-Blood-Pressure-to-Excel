import React from "react";
import CenterBox from "../components/boxes/center-box";
import FileBox from "../components/boxes/file-box";
import InputBox from "../components/boxes/input-box";
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
