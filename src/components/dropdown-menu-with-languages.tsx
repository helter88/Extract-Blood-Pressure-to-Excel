import styled from 'styled-components';
import American from '../assets/img/flags/american.svg'
import Germany from '../assets/img/flags/germany-flag-icon.svg'
import Italy from '../assets/img/flags/italy.svg'

const DropContainer = styled.div`
    position: absolute;
    left: 0;
    top: 3rem;
    width: 8rem;
    border: 1px solid #A4BE7B;
    border-radius: 6px;
`
const SingleImageContainer = styled.div`
    padding: 0 0.5rem;
    width: 2rem;
    display: flex;
    gap: 0.5rem;
    align-items: center
    & img{
        width: 100%;
        height: 100%;
    }
   
`



const DropdownMenuWithLanguages = () => {
  return (
    <DropContainer>
      <SingleImageContainer>
        <img src={American} alt='flag'/>
        <p>English</p>
      </SingleImageContainer>
      <SingleImageContainer>
        <img src={Germany} alt='flag'/>
        <p>German</p>
      </SingleImageContainer>
      <SingleImageContainer>
        <img src={Italy} alt='flag'/>
        <p>Italian</p>
      </SingleImageContainer>
    </DropContainer>
  )
}

export default DropdownMenuWithLanguages
