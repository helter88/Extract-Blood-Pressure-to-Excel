import styled from 'styled-components';
import Poland from '../assets/img/flags/poland.svg'

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
    border: 2px solid #A4BE7B;
    border-radius: 6px;

`

export const ImageLnaguage = styled.img`
    width: 100%;
    height: 100%;
`

const SelectLanguage = () => {
  return (
    <SelectLanguageContainer>
      <p>Select Language:</p>
      <ImageLanguageContainer>
        <ImageLnaguage src={Poland} alt='selected flag'/>
      </ImageLanguageContainer>
        
    </SelectLanguageContainer>
  )
}

export default SelectLanguage
