import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import { MainCointainer } from "./components/main-container";
import AddToFile from "./pages/add-to-file";
import CreateFile from "./pages/create-file";
import FirstPage from "./pages/first-page";



const App = () => {
  return (
    <MainCointainer>
          <Header />
          <Routes>
            <Route path='/' element ={<FirstPage />} />
            <Route path='/create-file' element ={<CreateFile />} />
            <Route path='/add-to-file' element ={<AddToFile />} />

          </Routes>
          
          
    </MainCointainer>  
  );
}

export default App;
