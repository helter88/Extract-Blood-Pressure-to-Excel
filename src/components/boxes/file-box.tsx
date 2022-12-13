import { ActionButton, FlieBoxContainer } from "./styles/file-box";
import * as XLSX from 'sheetjs-style';
import i18next from "i18next";
import { excelExtractDataJSON } from "../../utils/excel-extract-data-JSON";
import { FileInput } from "./styles/file-input";


const FileBox = () => {

  const handleFile = (e: any) => {
    const recivedData = excelExtractDataJSON(e);
  }

  return (
    <FlieBoxContainer>
      <ActionButton>Choose your file</ActionButton>
      <FileInput type="file" onChange={handleFile} />
    </FlieBoxContainer>
  );
};

export default FileBox;
