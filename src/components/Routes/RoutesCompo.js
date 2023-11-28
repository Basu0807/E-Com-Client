import React, { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Home from '../Home'
import Accessories from '../Products/Accessories'
import Laptops from '../Products/Laptops'
import Mobiles from '../Products/Mobiles'
import Watches from '../Products/Watches'
import SpecificProduct from './SpecificProduct'
import AddToCart from './AddToCart'
import Login from './Login'
import Signup from './SignUp'
import Profile from './Profile'
import SearchedCompo from './SearchedCompo'
import DynamicCompo from './DynamicCompo'
 
export const Storedata= createContext()
const RoutesCompo = () => {
 
 const[data,setData]=useState([])
//  console.log(data);
 
useEffect(()=>{
 axios.get('https://e-com-server-ce50.onrender.com/store/allproducts')
 .then((res)=>setData(res.data))
 .catch((err)=>console.log(err))
 },[])
  return (
   
    <Storedata.Provider value={data}>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/Laptops" element={<Laptops />} />
        <Route path="/Mobiles" element={<Mobiles />} />
        <Route path="/Watches" element={<Watches />} />
        <Route path="/Data/:id" element={<SpecificProduct/>}/>
        <Route path="/AddToCart" element={<AddToCart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/relatedProducts" element={<SearchedCompo/>}/>
        <Route path="/Products/:brand" element={<DynamicCompo/>}/>
        <Route path="/success" element={<DynamicCompo/>}/>
        <Route path="/cancel" element={<DynamicCompo/>}/>
      </Routes>
      </Storedata.Provider>
   

  )
}

export default RoutesCompo