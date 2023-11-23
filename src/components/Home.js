import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Storedata } from './Routes/RoutesCompo'
import { useDispatch } from 'react-redux'
import { Add } from './Redux/CartSlice'
import Footer from './Layout/Footer'

const Home = () => {
  const HomeData =useContext(Storedata)
  const dispatch =useDispatch()
  const shuffledImages = [...HomeData];
  // console.log(shuffledImages);

  for (let i = shuffledImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
  }
const selectedImages = shuffledImages.slice(0, 6);


  return (
    <>
   <div className='display_Image'>
    <img src='' alt='product_images'/>
   </div>

   <div className='main_container'>
    <h2>Best Seller</h2>
    {
 selectedImages.map((data,index)=>{
  return(
    <div key={index} className='Particular_product_Container'>

  <Link to={"/Data/"+data._id+data.id} state={{id:data._id}}>
<img  src={data.image} alt='product_logo'/>
</Link>
<div>
<p>{data.heading}</p>
<p>Price: {data.price}</p>
<button onClick={()=>{
  const SelectedProduct =HomeData.find((item)=>item._id===data._id)
  dispatch(Add(SelectedProduct))
  alert('Product Added')
}}>Add to cart</button>
</div>

</div>
  )
})
    }
   </div>
   <div className='video'></div>
   <div>
    <div>free Shipping</div>
    <div>Refund</div>
    <div>Support</div>
   </div>
   <Footer/>
    </>

  )
}

export default Home