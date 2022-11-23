import styled from 'styled-components';
import American from '../assets/img/flags/american.svg'
import Germany from '../assets/img/flags/germany-flag-icon.svg'
import Italy from '../assets/img/flags/italy.svg'

const DropContainer = styled.div`
    display: none;
    position: absolute;
    left: 0;
    top: 3rem;
    width: 10rem;
    border: 1px solid #A4BE7B;
    border-radius: 6px;
`

const RowLanguageContainer = styled.div`
    width:100%;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
    & p{
        opacity: 0.5;
    }

    &:hover{
        background-color: #A4BE7B;
        & p{
            opacity: 1;
        }    
    }
`
const SingleImageContainer = styled.div`
    padding: 0 0.5rem;
    width: 2rem;
  
    & img{
        width: 100%;
        height: 100%;
    }
   
`



const DropdownMenuWithLanguages = () => {
  return (
    <DropContainer>
        <RowLanguageContainer>
            <SingleImageContainer>
                <img src={American} alt='flag'/>
            </SingleImageContainer>
            <p>English</p>
        </RowLanguageContainer>
      <RowLanguageContainer>
        <SingleImageContainer>
            <img src={Germany} alt='flag'/>
        </SingleImageContainer>
        <p>German</p>
      </RowLanguageContainer>
      <RowLanguageContainer>
        <SingleImageContainer>
            <img src={Italy} alt='flag'/>
        </SingleImageContainer>
        <p>Italian</p>
      </RowLanguageContainer>
      
    </DropContainer>
  )
}

export default DropdownMenuWithLanguages
