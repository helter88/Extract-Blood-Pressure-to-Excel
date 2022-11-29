import styled from "styled-components";

export const RowLanguageContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  & p {
    opacity: 0.5;
  }

  &:hover {
    background-color: #76d593;
    & p {
      opacity: 1;
    }
  }
`;

export const SingleImageContainer = styled.div`
  padding: 0 0.5rem;
  width: 2rem;

  & img {
    width: 100%;
    height: 100%;
  }
`;