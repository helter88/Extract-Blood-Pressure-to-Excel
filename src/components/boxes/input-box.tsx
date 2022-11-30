import { InputBoxContainer } from "./styles/input-box";


const InputBox = () => {
  return (
    <InputBoxContainer>
      <label htmlFor="results">Add your results</label>
      <textarea id="results" name="results" rows={25} cols={30} />
    </InputBoxContainer>
  );
};

export default InputBox;
