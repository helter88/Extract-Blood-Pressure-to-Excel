import styled from "styled-components"

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
  return (
    <ExcelFileContainer>
      <p>No Excel file</p>    
    </ExcelFileContainer>
  )
}

export default NoExcelFile
