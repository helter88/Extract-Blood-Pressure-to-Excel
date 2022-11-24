import {useState} from 'react'
import styled from 'styled-components';
import Poland from '../assets/img/flags/poland.svg'
import DropdownMenuWithLanguages from './dropdown-menu-with-languages';

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
    border: 1px solid #A4BE7B;
    border-radius: 6px;
    position: relative;

`

export const ImageLnaguage = styled.img`
    width: 100%;
    height: 100%;
`

const SelectLanguage = () => {
    const [isOpen, setIsOpen] = useState(false)


    const onHandleMouseEnter = () => setIsOpen(true);
    const onHandleMouseLeave = () => setIsOpen(false);
  return (
    <SelectLanguageContainer>
      <p>Select Language:</p>
      <ImageLanguageContainer onMouseEnter={onHandleMouseEnter} 
        onMouseLeave={onHandleMouseLeave}>
        <ImageLnaguage src={Poland} alt='selected flag'/>
        <DropdownMenuWithLanguages openStatus={isOpen} />
      </ImageLanguageContainer>
        
    </SelectLanguageContainer>
  )
}

export default SelectLanguage
