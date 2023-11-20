import React, { useContext } from 'react'
import GenericCompo from '../Routes/GenericCompo'
import { Storedata } from '../Routes/RoutesCompo'

const Mobiles = () => {

  const ProductData =useContext(Storedata)
  // console.log(ProductData)
 
  return (
   <>

   <div className='main_container'>
    <div className='side_container'> 
      <p>nsdofjwn</p>
      <p>nsdofjwn</p>
      <p>nsdofjwn</p>
      <p>nsdofjwn</p>
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

   
   </>
  )
}

export default Mobiles