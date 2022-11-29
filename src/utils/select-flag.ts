import English from "../assets/img/flags/american.svg";
import German from "../assets/img/flags/germany-flag-icon.svg";
import Italian from "../assets/img/flags/italy.svg";
import Polish from "../assets/img/flags/poland.svg";

export const selectFlag = (language: string) => {
  switch (language) {
    case "Polish":
      return Polish;
    case "German":
      return German;
    case "Italian":
      return Italian;
    default:
      return English;
  }
};
