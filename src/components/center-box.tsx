import styled from "styled-components";
import { ReactComponent as RightArrow } from "../assets/img/arrow-right-icon.svg";
import { useTranslation } from "react-i18next";

const CenterContainer = styled.div`
  align-self: center;
`;

const ArrowContainer = styled.div`
  width: 10rem;
  fill: #107c41;
`;

const CenterBox = () => {
  const { t } = useTranslation();
  return (
    <CenterContainer>
      <p>{t("Start processing")}</p>
      <ArrowContainer>
        <RightArrow aria-label="right arrow" />
      </ArrowContainer>
    </CenterContainer>
  );
};

export default CenterBox;
