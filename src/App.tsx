import Header from "./components/header";
import { MainCointainer } from "./components/main-container";
import Options from "./components/options";
import SecondLine from "./components/second-line";


const App = () => {
  return (
    <MainCointainer>
          <Header />
          <SecondLine />
          <Options />
    </MainCointainer>  
  );
}

export default App;
