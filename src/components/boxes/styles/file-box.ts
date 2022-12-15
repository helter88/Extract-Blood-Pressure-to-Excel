import styled from "styled-components";

export const FlieBoxContainer = styled.div`
  
  width: 20rem;
  height: 25rem;
  border: 2px solid #107c41;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
`;
export const ActionButton = styled.button`
  padding: 1rem 2rem;
  background-color: #107c41;
  color: white;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
`;

export const FileNotChosen = styled.div`
  visibility: hidden;
  position: relative;
  text-align: center;
  padding: 0.4rem 0;
  top: -1rem;
  width: 50%;
  border: 1px solid #c61a09;
  border-radius: 0.3rem;
  &.visible {
    visibility: visible;
  }
  &::after {
    content:"";
    position: absolute;
    height:0;
    width:0;
    top: 1.8rem;
    right: 4.5rem;
    border: 5px solid transparent;
    border-top-color: #c61a09 
  };
  span {
    font-size: 0.83rem;
    font-family: Arial;
    font-weight: 400;
    color: #c61a09;
  }

`
export const ShowSelectedFile = styled.span`
  margin-top: 0.8rem;
  font-size: 0.7rem;
  font-family: Arial;
  font-weight: 300;
  &.hidden {
    visibility: hidden;
  }
`