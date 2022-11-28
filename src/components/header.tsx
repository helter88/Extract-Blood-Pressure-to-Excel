import styled from 'styled-components';
import SelectLanguage from './select-language';
import { useTranslation } from 'react-i18next';

export const HeaderStyle = styled.div`
    display: flex;
    margin: 2rem auto;
    & h1 {
        font-size: 3rem;
    }
`

const Header = () => {
  const { t } = useTranslation()
  return (
    <HeaderStyle>
      <h1>{t("Title")}</h1>
      <SelectLanguage />
    </HeaderStyle>
  )
}

export default Header
