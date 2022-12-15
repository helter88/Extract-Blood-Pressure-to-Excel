import { ActionButton, FileNotChosen, FlieBoxContainer } from "./styles/file-box";
import * as XLSX from 'sheetjs-style';
import i18next from "i18next";
import { excelExtractDataJSON } from "../../utils/excel-extract-data-JSON";
import { FileInput } from "./styles/file-input";

export interface FileBoxTypes {
  excelData: (recivedData: any) => void,
  fileSelectStatus: boolean | null

}

const FileBox: React.FC<FileBoxTypes> = ({ excelData, fileSelectStatus }) => {

  const handleFile = async (e: any) => {
    const recivedData = await excelExtractDataJSON(e);
    excelData(recivedData)
  }

  return (
    <FlieBoxContainer>
      <FileNotChosen><span>Please choose file</span></FileNotChosen>
      <FileInput>
        <input type="file" onChange={handleFile} />
        <span>Choose your file</span>
      </FileInput>

    </FlieBoxContainer>
  );
};

export default FileBox;
