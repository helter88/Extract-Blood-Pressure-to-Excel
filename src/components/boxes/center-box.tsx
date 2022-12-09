
import { ReactComponent as RightArrow } from "../../assets/img/arrow-right-icon.svg";
import { useTranslation } from "react-i18next";
import { ArrowContainer, CenterContainer } from "./styles/center-box";
import { ActionButton } from "./styles/file-box";



const CenterBox = () => {
  const { t } = useTranslation();
  return (
    <CenterContainer>
      <ActionButton>{t("Start exporting")}</ActionButton>
      <ArrowContainer>
        <RightArrow aria-label="right arrow" />
      </ArrowContainer>
    </CenterContainer>
  );
};

export default CenterBox;
