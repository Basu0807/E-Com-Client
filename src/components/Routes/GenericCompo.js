import React, { useContext } from 'react'
import { Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { Add } from '../Redux/CartSlice'
import { Storedata } from './RoutesCompo'

const GenericCompo = ({image,heading,price,id}) => {

  const dispatch= useDispatch()
  // const ScrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }
  
  const ProductData =useContext(Storedata)
  const SelectedProduct = ProductData.find((item)=>item._id===id)

  const AddToCart=()=>{
    alert('Product added')
    dispatch(Add(SelectedProduct))
  }
// console.log(id);
  return (
   <>
  <div className='Particular_product_Container'>

  <Link to={"/Data/"+id} state={{id:id}}>
<img  src={image} alt='product_logo'/>
</Link>
<div>
<p>{heading}</p>
<p>Price: {price}</p>
<button onClick={()=>AddToCart()}>Add to cart</button>
</div>

</div>
</>
  )
}

export default GenericCompo