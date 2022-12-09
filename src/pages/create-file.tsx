import { useRef } from "react";
import styled from "styled-components";
import CenterBox from "../components/boxes/center-box";
import NewFileBox from "../components/boxes/new-file-box";
import InputBox from "../components/boxes/input-box";
import { useEffectOnce } from "usehooks-ts";

export const CreateFileContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;
  padding: 0 25rem;
`;

const CreateFile = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <CreateFileContainer>
      <InputBox ref={inputRef} />
      <CenterBox name="create" data={inputRef} />
      <NewFileBox />
    </CreateFileContainer>
  );
};

export default CreateFile;
