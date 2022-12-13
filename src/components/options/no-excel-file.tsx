import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { ReactComponent as NoExcel } from "../../assets/img/main/noExcel-icon.svg";
import { useNavigate } from "react-router-dom";

export const ExcelFileContainer = styled.div`
  width: 20rem;
  height: 25rem;
  border: 2px solid #107c41;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s ease-in-out;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &.no-scale{
    &:hover{
      transform: none;
      cursor: auto;
    }
  }
  p {
    text-align: center;
    font-size: 1.2rem;
  }
`;
export const ImageContainer = styled.div`
  margin-top: 5rem;
  width: 10rem;
  fill: #107c41;
`;
const NoExcelFile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onHandleClick = () => navigate("/create-file");

  return (
    <ExcelFileContainer onClick={onHandleClick}>
      <p>{t("No Excel")}</p>
      <ImageContainer>
        <NoExcel aria-label="No Excel" />
      </ImageContainer>
    </ExcelFileContainer>
  );
};

export default NoExcelFile;
