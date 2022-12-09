import React, { useRef } from "react";
import CenterBox from "../components/boxes/center-box";
import FileBox from "../components/boxes/file-box";
import InputBox from "../components/boxes/input-box";
import { CreateFileContainer } from "./create-file";

const AddToFile = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  return (
    <CreateFileContainer>
      <InputBox ref={inputRef} />
      <CenterBox name="add" data={inputRef} />
      <FileBox />
    </CreateFileContainer>
  );
};

export default AddToFile;
