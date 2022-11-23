import styled from 'styled-components';
import Poland from '../assets/img/flags/poland.svg'

export const SelectLanguageContainer = styled.div`
    display: flex;
`

export const ImageLnaguage = styled.img`
    width: 5rem;
    height: 2rem;
`

const SelectLanguage = () => {
  return (
    <SelectLanguageContainer>
      <p>Select Language:</p>
        <ImageLnaguage src={Poland} alt='selected flag'/>
    </SelectLanguageContainer>
  )
}

export default SelectLanguage
