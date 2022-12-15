import React, { useRef, useState } from "react";
import CenterBox from "../components/boxes/center-box";
import FileBox from "../components/boxes/file-box";
import InputBox from "../components/boxes/input-box";
import { CreateFileContainer } from "./create-file";

const AddToFile = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [fileBoxData, setFileBoxData] = useState(null);
  const [fileSelectStatus, setFileSelectStatus] = useState<boolean | null>(null);

  const handleExcelData = (excelData: any) => {
    setFileBoxData(excelData)
  }

  const hendleFileSelectStatus = () => {
    setFileSelectStatus(true)
  }

  return (
    <CreateFileContainer>
      <InputBox ref={inputRef} />
      <CenterBox name="add" inputData={inputRef} excelData={fileBoxData} changeFileSelectStatus={hendleFileSelectStatus} />
      <FileBox excelData={handleExcelData} fileSelectStatus={fileSelectStatus} />
    </CreateFileContainer>
  );
};

export default AddToFile;
