import styled from 'styled-components';
import useLanguages from '../../hooks/use-languages';
import { selectFlag } from '../../utils/select-flag';


export const ImageLang = styled.img`
    width: 100%;
    height: 100%;
`

const ShowCurrentImgLang = () => {
    const {language} = useLanguages()
  return  <ImageLang src={selectFlag(language)} alt='selected flag'/>
}

export default ShowCurrentImgLang
