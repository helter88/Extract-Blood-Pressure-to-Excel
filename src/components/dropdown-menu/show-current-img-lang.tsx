import styled from "styled-components";
import useLanguages from "../../hooks/use-languages";
import { selectFlag } from "../../utils/select-flag";

export const ImageLang = styled.img`
  width: 2rem;
  padding: 0.5rem;
  border: 1px solid #107c41;
  border-radius: 6px;
`;

const ShowCurrentImgLang = () => {
  const { language } = useLanguages();
  return <ImageLang src={selectFlag(language)} alt="selected flag" />;
};

export default ShowCurrentImgLang;
