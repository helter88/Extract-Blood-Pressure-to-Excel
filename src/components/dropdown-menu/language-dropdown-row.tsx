import useLanguages from "../../hooks/use-languages";
import { selectFlag } from "../../utils/select-flag";
import { useTranslation } from "react-i18next";
import { lngToISO } from "../../utils/lng-to-iso";
import { RowLanguageContainer, SingleImageContainer } from "./styles/language-dropdown-row";

const LanguageDropdownRow = ({ language }: { language: string }) => {
  const { setLanguage } = useLanguages();
  const { t, i18n } = useTranslation();

  const onClickHandler = () => {
    setLanguage(language);
    i18n.changeLanguage(lngToISO(language));
  };

  return (
    <RowLanguageContainer onClick={onClickHandler}>
      <SingleImageContainer>
        <img src={selectFlag(language)} alt="flag" />
      </SingleImageContainer>
      <p>{t(language)}</p>
    </RowLanguageContainer>
  );
};

export default LanguageDropdownRow;
