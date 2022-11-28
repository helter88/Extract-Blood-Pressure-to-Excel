import { ExcelFileContainer, ImageContainer } from './no-excel-file'
import { useTranslation } from 'react-i18next';
import {ReactComponent as MyExcel} from '../../assets/img/main/excel-icon.svg'
import { useNavigate } from 'react-router-dom';

const MyExcelFile = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const onHandleClick = () => navigate("/add-to-file")
  return (
    <ExcelFileContainer onClick={onHandleClick}>
        <p>{t("My Excel")}</p>  
        <ImageContainer>
            <MyExcel aria-label="Ny Excel" />
        </ImageContainer>  
    </ExcelFileContainer>
  )
}

export default MyExcelFile
