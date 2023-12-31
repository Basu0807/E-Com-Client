import React, { useContext } from 'react'
import GenericCompo from '../Routes/GenericCompo'
import { Storedata } from '../Routes/RoutesCompo'
import Footer from '../Layout/Footer'
import { Link } from 'react-router-dom'

const Accessories = () => {
  const ProductData =useContext(Storedata)

  return (
    <>
  <div className='main_container'>
    <div className='side_container'> 
    <h1>Accessories</h1>
      <h2> <Link className='submenu_link'to={'/products/Charger'} state={{Brand:'charger'}}>Charger</Link></h2>
      <h2><Link className='submenu_link' to={'/products/PowerBank'} state={{Brand:'Power Bank'}}>Power Bank</Link></h2>

    </div>
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