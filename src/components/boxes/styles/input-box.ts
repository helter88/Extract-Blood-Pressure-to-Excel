import styled from "styled-components";

export const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  & textarea {
    outline: none;
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: #107c41;
    color: white;
  };
  & label {
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
  }
`;