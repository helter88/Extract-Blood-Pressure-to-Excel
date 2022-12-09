import { forwardRef } from 'react';
import { InputBoxContainer } from "./styles/input-box";
import { parse } from '../../utils/parse-blood-pressure-text'

const InputBox = forwardRef<HTMLTextAreaElement>((props, ref) => {

  return (
    <InputBoxContainer>
      <label htmlFor="results">Add your results</label>
      <textarea ref={ref} id="results" name="results" rows={25} cols={30} />
    </InputBoxContainer>
  );
});

export default InputBox;

