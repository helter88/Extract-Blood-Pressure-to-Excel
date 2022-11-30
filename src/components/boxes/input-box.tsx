import styled from "styled-components";

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  & textarea {
    outline: none;
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: #107c41;
    color: white;
  }
`;

const InputBox = () => {
  return (
    <InputBoxContainer>
      <label htmlFor="results">Add your results</label>
      <textarea id="results" name="results" rows={25} cols={30} />
    </InputBoxContainer>
  );
};

export default InputBox;
