
import { ReactComponent as RightArrow } from "../../assets/img/arrow-right-icon.svg";
import { useTranslation } from "react-i18next";
import { ArrowContainer, CenterContainer } from "./styles/center-box";
import { ActionButton } from "./styles/file-box";
import { parse } from '../../utils/parse-blood-pressure-text'
import { createExcelAndExport } from "../../utils/excel-create-export";

interface CenterBoxType {
  name: "create" | "add"
  data: any
}

const CenterBox: React.FC<CenterBoxType> = ({ name, data }) => {
  const { t } = useTranslation();

  const onClickHandler = () => {
    const parsedData = parse(data?.current?.value)
    if (name === "create") {
      createExcelAndExport(parsedData);
    }

  }

  return (
    <CenterContainer>
      <ActionButton onClick={onClickHandler}>{t("Start exporting")}</ActionButton>
      <ArrowContainer>
        <RightArrow aria-label="right arrow" />
      </ArrowContainer>
    </CenterContainer>
  );
};

export default CenterBox;
