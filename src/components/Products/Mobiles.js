import React, { useContext } from 'react'
import GenericCompo from '../Routes/GenericCompo'
import { Storedata } from '../Routes/RoutesCompo'
import Footer from '../Layout/Footer'
import { Link } from 'react-router-dom'

const Mobiles = () => {

  const ProductData =useContext(Storedata)
  // console.log(ProductData)
 
  return (
   <>

   <div className='main_container'>
    <div className='side_container'> 
    <h1>Top Brands</h1>
      <h2><Link className='submenu_link' to={'/products/RealMe'} state={{Brand:'realme'}}>RealME</Link></h2>
      <h2><Link className='submenu_link' to={'/products/Vivo'} state={{Brand:'Vivo'}}>Vivo</Link></h2>
     
    </div>
    <div className='Product_Container'>
    {
  ProductData && ProductData.filter((item)=>item.category ==="mobile").map((item,index)=>{
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

export default Mobiles