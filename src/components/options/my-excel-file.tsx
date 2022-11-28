import React from 'react'
import { ExcelFileContainer, ImageContainer } from './no-excel-file'
import { useTranslation } from 'react-i18next';
import {ReactComponent as MyExcel} from '../../assets/img/main/excel-icon.svg'

const MyExcelFile = () => {
    const { t } = useTranslation()
  return (
    <ExcelFileContainer>
        <p>{t("My Excel")}</p>  
        <ImageContainer>
            <MyExcel aria-label="Ny Excel" />
        </ImageContainer>  
    </ExcelFileContainer>
  )
}

export default MyExcelFile
