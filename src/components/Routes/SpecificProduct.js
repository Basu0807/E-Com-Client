import React, { useContext } from 'react'
// import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
// import { Add } from '../Redux/CartSlice'
import { Storedata } from './RoutesCompo'
import { Add } from '../Redux/CartSlice'
import { useDispatch } from 'react-redux'


const SpecificProduct = () => {
  const ProductData =useContext(Storedata)
  const id = useLocation().state.id
  const SelectedProduct = ProductData.find((item)=>item._id===id)
  console.log(id,SelectedProduct)
const dispatch =useDispatch()

const AddToCart=()=>{
  alert('Product added')
  dispatch(Add(SelectedProduct))
 
  
}

  return (
    <>
   
   {
      ProductData && ProductData.filter((item)=>item._id === id).map((item,index)=>{
        return(
          
          <div className='Dynamic_Container' key={index}>
        <img src={item.image} alt='product_image'/>

  <div  className='Generic_Product' >
  <h1>{item.heading}</h1><br/>
<p>{item.description}</p><br/>
<h2>Price: {item.price}</h2>
<button className='add_to_cart_btn1' onClick={()=>AddToCart()}>Add to cart</button>

</div>
</div>
    
        )
      })
    }
  

    </>
  )
  
}

export default SpecificProduct