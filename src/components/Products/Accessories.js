import React, { useContext } from 'react'
import GenericCompo from '../Routes/GenericCompo'
import { Storedata } from '../Routes/RoutesCompo'
import Footer from '../Layout/Footer'

const Accessories = () => {
  const ProductData =useContext(Storedata)

  return (
    <>
  <div className='main_container'>
    {/* <div className='side_container'> 
      <p>nsdofjwn</p>
      <p>nsdofjwn</p>
      <p>nsdofjwn</p>
      <p>nsdofjwn</p>
    </div> */}
    <div className='Product_Container'>
    {
  ProductData && ProductData.filter((item)=>item.category ==="accessories" || item.category==='Headphones').map((item,index)=>{
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

export default Accessories