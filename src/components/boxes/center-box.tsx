
import { ReactComponent as RightArrow } from "../../assets/img/arrow-right-icon.svg";
import { useTranslation } from "react-i18next";
import { ArrowContainer, CenterContainer } from "./styles/center-box";
import { ActionButton } from "./styles/file-box";
import { parse } from '../../utils/parse-blood-pressure-text'
import { createExcelAndExport } from "../../utils/excel-create-export";

interface CenterBoxType {
  name: "create" | "add"
  inputData: any,
  excelData?: any,
  changeFileSelectStatus: () => void
}

const CenterBox: React.FC<CenterBoxType> = ({ name, inputData, excelData, changeFileSelectStatus }) => {
  const { t } = useTranslation();

  const onClickHandler = () => {
    const parsedData = parse(inputData?.current?.value)
    if (name === "create") {
      createExcelAndExport(parsedData);
    }
    if (name === "add") {
      if (excelData === null) {
        changeFileSelectStatus()
      } else {
        excelData.push(...parsedData)
        createExcelAndExport(excelData)
      }
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
