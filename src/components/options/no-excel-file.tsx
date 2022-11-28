import styled from "styled-components"
import { useTranslation } from 'react-i18next';
import {ReactComponent as NoExcel} from '../../assets/img/main/noExcel-icon.svg'

export const ExcelFileContainer = styled.div`
    width: 20rem;
    height: 25rem;
    border: 2px solid #107C41;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items:center;
    transition: all .4s ease-in-out;
    cursor: pointer;
    &:hover {
        transform: scale(1.1)
    }
    p {
        text-align: center;
        font-size: 1.2rem;
    }
`
export const ImageContainer = styled.div`
     margin-top: 5rem;
     width: 10rem;
     fill: #107C41;
  
`
const NoExcelFile = () => {
    const { t } = useTranslation()
  return (
    <ExcelFileContainer>
      <p>{t("No Excel")}</p> 
      <ImageContainer>
        <NoExcel aria-label="No Excel" />
      </ImageContainer>   
    </ExcelFileContainer>
  )
}

export default NoExcelFile
