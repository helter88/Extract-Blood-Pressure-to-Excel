import styled from 'styled-components';
import SelectLanguage from './select-language';
import { useTranslation } from 'react-i18next';
import useLanguages from '../hooks/use-languages';
import { useEffect } from 'react';
import { lngToISO } from '../utils/lng-to-iso';

export const HeaderStyle = styled.div`
    display: flex;
    margin: 2rem auto;
    & h1 {
        font-size: 3rem;
    }
`

const Header = () => {
  const { t, i18n } = useTranslation()
  const {language} = useLanguages();

  useEffect(() => {
    i18n.changeLanguage(lngToISO(language));
  })

  return (
    <HeaderStyle>
      <h1>{t("Title")}</h1>
      <SelectLanguage />
    </HeaderStyle>
  )
}

export default Header
