import React, { useContext } from 'react'
import { Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { Add } from '../Redux/CartSlice'
import { Storedata } from './RoutesCompo'



const GenericCompo = ({image,heading,price,id}) => {

  const dispatch= useDispatch()
  
  
  const ProductData =useContext(Storedata)
  const SelectedProduct = ProductData.find((item)=>item._id===id)
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const AddToCart=()=>{
    alert('Product added')
    dispatch(Add(SelectedProduct))
  }

  
// console.log(id);
  return (
   <>
  <div className='Particular_product_Container'>

  <Link to={"/Data/"+id} state={{id:id}} onClick={ScrollToTop}>
<img  src={image} alt='product_logo'/>
</Link>
<div>
<p style={{fontWeight:'bolder',fontSize:20}}>{heading}</p>
<p style={{color:'green',fontWeight:'bolder'}}>Price: ₹{price}</p>
<button onClick={()=>AddToCart()}>Add to cart</button>
</div>

</div>

</>
  )
}

export default GenericCompo