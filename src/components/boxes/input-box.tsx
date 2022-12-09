import { forwardRef } from 'react';
import { InputBoxContainer } from "./styles/input-box";
import { useTranslation } from "react-i18next";

const InputBox = forwardRef<HTMLTextAreaElement>((props, ref) => {
  const { t } = useTranslation();
  return (
    <InputBoxContainer>
      <label htmlFor="results">{t("Add your results")}</label>
      <textarea ref={ref} id="results" name="results" rows={25} cols={30} />
    </InputBoxContainer>
  );
});

export default InputBox;

