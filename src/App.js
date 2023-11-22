import { BrowserRouter } from "react-router-dom";
import RoutesCompo from "./components/Routes/RoutesCompo";
import  './components/Style.css'
import Header from "./components/Layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { TotalAmount } from "./components/Redux/CartSlice";


function App() {
  const CartItems=useSelector((state)=>state.InDe.Cart)
  const dispatch =useDispatch()
  useEffect(()=>{
dispatch(TotalAmount())
  },[CartItems,dispatch])
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
