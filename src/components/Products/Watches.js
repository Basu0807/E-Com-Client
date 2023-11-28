import React, { useContext } from 'react'
import GenericCompo from '../Routes/GenericCompo'
import { Storedata } from '../Routes/RoutesCompo'
import Footer from '../Layout/Footer'
import { Link } from 'react-router-dom'

const Watches = () => {
  const ProductData =useContext(Storedata)

  return (
    <>
   <div className='main_container'>
    <div className='side_container'> 
    <h1>Top Brands</h1>
      <h2><Link className='submenu_link' to={'/products/Titan'} state={{Brand:'Titan'}}>Titan</Link></h2>
      <h2><Link className='submenu_link' to={'/products/Casio'} state={{Brand:'Casio'}}>Casio</Link></h2>
      <h2><Link className='submenu_link' to={'/products/Fastrack'} state={{Brand:'fastrack'}}>Fastrack</Link></h2>
    </div>
    <div className='Product_Container'>
    {
  ProductData && ProductData.filter((item)=>item.category ==="watches").map((item,index)=>{
    return(
      
      <GenericCompo 
      id={item._id}
      image={item.image} 
      heading={item.Model} 
      price={item.price} key={index}/>

    )
  })
}
    </div>

   </div>
    <Footer/>
    </>
  )
}

export default Watches