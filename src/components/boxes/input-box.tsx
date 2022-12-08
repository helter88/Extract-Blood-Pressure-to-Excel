import { InputBoxContainer } from "./styles/input-box";
import { parse } from '../../utils/parse-blood-pressure-text'
import { exportExcel } from "../../utils/excel-export";

const InputBox = () => {
  const handleBlur = (e: any) => {
    const data = parse(e?.target?.value)
    exportExcel(data)
  }

  return (
    <InputBoxContainer>
      <label htmlFor="results">Add your results</label>
      <textarea onPaste={handleBlur} id="results" name="results" rows={25} cols={30} />
    </InputBoxContainer>
  );
};

export default InputBox;
