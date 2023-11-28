import React from 'react'
import { useSelector } from 'react-redux'
import GenericCompo from './GenericCompo';
import Footer from '../Layout/Footer';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router';

const SearchedCompo = () => {
    const Products =useSelector((state)=>state.Search)
    console.log(Products);
  return (
    <>
    <div className='main_container'>
<div className='side_container'> 
<h1 style={{}}>Accessories You May Like</h1>
  <h2> <Link className='submenu_link'to={'/products/Charger'} state={{Brand:'charger'}}>Charger</Link></h2>
  <h2><Link className='submenu_link' to={'/products/PowerBank'} state={{Brand:'Power Bank'}}>Power Bank</Link></h2>

</div>
<div className='Product_Container'>
{
Products && Products.map((item,index)=>{
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

export default SearchedCompo