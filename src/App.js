import { BrowserRouter } from "react-router-dom";
import RoutesCompo from "./components/Routes/RoutesCompo";
import  './components/Style.css'
import Header from "./components/Layout/Header";


function App() {
  return (
  <>
  <BrowserRouter>
  <Header/>
  <RoutesCompo/>
  </BrowserRouter>
  </>
  );
}

export default App;
