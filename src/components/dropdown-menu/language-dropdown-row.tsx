import styled from 'styled-components';
import useLanguages from '../../hooks/use-languages';
import { selectFlag } from '../../utils/select-flag';
import { useTranslation } from 'react-i18next';
import { lngToISO } from '../../utils/lng-to-iso';

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
        background-color: #76D593;
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
    const {setLanguage} = useLanguages();
    const { i18n } = useTranslation()

    const onClickHandler = () => {
        setLanguage(language);
        i18n.changeLanguage(lngToISO(language));
    }

  return (
    <RowLanguageContainer onClick={onClickHandler}>
        <SingleImageContainer>
            <img src={selectFlag(language)} alt='flag'/>
        </SingleImageContainer>
         <p>{language}</p>
    </RowLanguageContainer>
  )
}

export default LanguageDropdownRow 
