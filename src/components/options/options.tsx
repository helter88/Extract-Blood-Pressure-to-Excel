import styled from "styled-components"
import MyExcelFile from "./my-excel-file"
import NoExcelFile from "./no-excel-file"

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between
`

const Options = () => {
  return (
    <OptionsContainer>
      <NoExcelFile />
      <MyExcelFile />
    </OptionsContainer>
  )
}

export default Options
