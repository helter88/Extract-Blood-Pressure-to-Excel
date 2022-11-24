import styled from 'styled-components';
import English from '../assets/img/flags/american.svg'
import German from '../assets/img/flags/germany-flag-icon.svg'
import Italian from '../assets/img/flags/italy.svg'
import Polish from '../assets/img/flags/poland.svg'

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

const LanguageDropdownRow = ({language}:{language:string}) => {
    const selectedFlag = () =>{
        switch (language) {
            case "Polish":
                return Polish
            case "German":
                return German
            case "Italian":
                return Italian
            default: 
                return English
        }
    }
  return (
    <RowLanguageContainer>
        <SingleImageContainer>
            <img src={selectedFlag()} alt='flag'/>
        </SingleImageContainer>
         <p>{language}</p>
    </RowLanguageContainer>
  )
}

export default LanguageDropdownRow 
