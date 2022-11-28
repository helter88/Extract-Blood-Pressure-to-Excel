import styled from "styled-components"
import { useTranslation } from 'react-i18next';

export const ExcelFileContainer = styled.div`
    width: 20rem;
    height: 25rem;
    border: 2px solid #A4BE7B;
    padding: 1rem;
    p {
        text-align: center;
        font-size: 1.2rem;
    }
`
const NoExcelFile = () => {
    const { t } = useTranslation()
  return (
    <ExcelFileContainer>
      <p>{t("No Excel")}</p>    
    </ExcelFileContainer>
  )
}

export default NoExcelFile
