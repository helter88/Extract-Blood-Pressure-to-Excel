
import { ReactComponent as RightArrow } from "../../assets/img/arrow-right-icon.svg";
import { useTranslation } from "react-i18next";
import { ArrowContainer, CenterContainer } from "./styles/center-box";



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
