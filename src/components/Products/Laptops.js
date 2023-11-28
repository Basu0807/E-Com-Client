import React, { useContext } from 'react'
import GenericCompo from '../Routes/GenericCompo'
import { Storedata } from '../Routes/RoutesCompo'
import Footer from '../Layout/Footer'
import { Link } from 'react-router-dom'

const Laptops = () => {
  const ProductData =useContext(Storedata)

  return (
    <>
  <div className='main_container'>
    <div className='side_container'> 
    <h1>Top Brands</h1>
      <h2><Link className='submenu_link' to={'/products/Acer'} state={{Brand:'Acer'}}>Acer</Link></h2>
      <h2><Link className='submenu_link' to={'/products/Hp'} state={{Brand:'HP'}}>Hp</Link></h2>
      <h2><Link className='submenu_link' to={'/products/Dell'} state={{Brand:'Dell'}}>Dell</Link></h2>

    </div>
    <div className='Product_Container'>
    {
  ProductData && ProductData.filter((item)=>item.category ==="laptop").map((item,index)=>{
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

export default Laptops