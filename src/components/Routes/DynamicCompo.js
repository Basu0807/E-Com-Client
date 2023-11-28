import React, { useContext } from 'react'
import { useLocation } from 'react-router'
import { Storedata } from './RoutesCompo'
import { Link } from 'react-router-dom'
import GenericCompo from './GenericCompo'

const DynamicCompo = () => {
  const Products =useContext(Storedata)
  const Brand=useLocation().state.Brand
  console.log(Brand);
  return (
<div className='main_container'>
<div className='side_container'> 
<h1 style={{}}>Accessories You May Like</h1>
  <h2> <Link className='submenu_link'to={'/products/Charger'} state={{Brand:'charger'}}>Charger</Link></h2>
  <h2><Link className='submenu_link' to={'/products/PowerBank'} state={{Brand:'Power Bank'}}>Power Bank</Link></h2>

</div>
<div className='Product_Container'>
 
{
Products && Products.filter((item)=>item.Brand ===Brand ||item.Model===Brand).map((item,index)=>{
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

  )
}

export default DynamicCompo