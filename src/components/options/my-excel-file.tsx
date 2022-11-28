import React from 'react'
import { ExcelFileContainer } from './no-excel-file'
import { useTranslation } from 'react-i18next';

const MyExcelFile = () => {
    const { t } = useTranslation()
  return (
    <ExcelFileContainer>
        <p>{t("My Excel")}</p>  
      
    </ExcelFileContainer>
  )
}

export default MyExcelFile
