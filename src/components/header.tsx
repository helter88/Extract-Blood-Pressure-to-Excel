import styled from 'styled-components';
import SelectLanguage from './select-language';

export const HeaderStyle = styled.div`
    display: flex;
    width: 80%;
`

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Exract Blood Pressure to Excel</h1>
      <SelectLanguage />
    </HeaderStyle>
  )
}

export default Header
