import styled from 'styled-components';
import {ReactComponent as RightArrow} from '../assets/img/arrow-right-icon.svg';

const ArrowContainer = styled.div`
    width: 10rem;
    fill: #107C41;

`

const CenterBox = () => {
  return (
    <div>
        <p>Start process</p>
        <ArrowContainer>
            <RightArrow aria-label = "right arrow" />
        </ArrowContainer>
      
    </div>
  )
}

export default CenterBox
