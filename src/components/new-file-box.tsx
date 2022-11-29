import React from 'react'
import { ExcelFileContainer, ImageContainer } from './options/no-excel-file';
import {ReactComponent as MyExcel} from '../assets/img/main/excel-icon.svg'

const NewFileBox = () => {
  return (
    <ExcelFileContainer>
     <p>Create new Excel File</p>
     <ImageContainer>
        <MyExcel aria-label="Ny Excel" />
      </ImageContainer>
    </ExcelFileContainer>
  )
}

export default NewFileBox
