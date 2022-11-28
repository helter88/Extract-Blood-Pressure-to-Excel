import {useState} from 'react'
import styled from 'styled-components';
import DropdownMenuWithLanguages from './dropdown-menu-with-languages';
import ShowCurrentImgLang from './show-current-img-lang';
import { useTranslation } from 'react-i18next';

export const SelectLanguageContainer = styled.div`
    margin-left: 2rem;
    display: flex;
    gap: 1rem;
    & p {
        font-size: 1rem;
    }
`

export const ImageLanguageContainer = styled.div`
    height: 1.5rem;
    width: 2rem;
    padding: 0.5rem;
    border: 1px solid #107C41;
    border-radius: 6px;
    position: relative;

`

const SelectLanguage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation()


    const onHandleMouseEnter = () => setIsOpen(true);
    const onHandleMouseLeave = () => setIsOpen(false);
  return (
    <SelectLanguageContainer>
      <p>{t("Select Language")}</p>
      <ImageLanguageContainer onMouseEnter={onHandleMouseEnter} 
        onMouseLeave={onHandleMouseLeave}>
        <ShowCurrentImgLang />
        <DropdownMenuWithLanguages openStatus={isOpen} />
      </ImageLanguageContainer>
        
    </SelectLanguageContainer>
  )
}

export default SelectLanguage
