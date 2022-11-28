import styled from 'styled-components';

import useLanguages from '../hooks/use-languages';
import LanguageDropdownRow from './language-dropdown-row';

const DropContainer = styled.div<OpenStatus>`
    /* display: ${({openStatus}) => !openStatus && "none"}; */
    position: absolute;
    left: 0;
    top: 3rem;
    width: 10rem;
    border: 1px solid #A4BE7B;
    border-radius: 6px;
`



interface OpenStatus {
    openStatus: boolean
}


const DropdownMenuWithLanguages = ({openStatus}: OpenStatus) => {
    const {languages} = useLanguages();
    const LanguageDropdownRowList = languages?.map((lang:string)=>{
        return  <LanguageDropdownRow key={lang} language={lang}/>
    })
  return (
    <DropContainer openStatus={openStatus}>
       {LanguageDropdownRowList}
      
    </DropContainer>
  )
}

export default DropdownMenuWithLanguages
