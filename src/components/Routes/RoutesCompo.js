import React, { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Home from '../Home'
import Accessories from '../Products/Accessories'
import Laptops from '../Products/Laptops'
import Mobiles from '../Products/Mobiles'
import Watches from '../Products/Watches'
import Clothes from '../Products/Clothes'
import SpecificProduct from './SpecificProduct'
import AddToCart from './AddToCart'
import Login from './Login'
import Signup from './SignUp'
import Profile from './Profile'
import SearchedCompo from './SearchedCompo'
 
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
        <Route path="/Clothes" element={<Clothes />} />
        <Route path="/Data/:id" element={<SpecificProduct/>}/>
        <Route path="/AddToCart" element={<AddToCart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/relatedProducts" element={<SearchedCompo/>}/>
      </Routes>
      </Storedata.Provider>
   

  )
}

export default RoutesCompo