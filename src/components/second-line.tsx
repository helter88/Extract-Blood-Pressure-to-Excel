import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const H2 = styled.h2`
    text-align: center;
    margin-top: 10rem;
    font-size: 1.5rem;
    font-weight: 400
`
const SecondLine = () => {
    const { t } = useTranslation()

  return (
    <H2>
      {t("Select one of the options")}
    </H2>
  )
}

export default SecondLine
