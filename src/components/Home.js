import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Storedata } from './Routes/RoutesCompo'
import { useDispatch } from 'react-redux'
import { Add } from './Redux/CartSlice'
import Footer from './Layout/Footer'

const Home = () => {
  const HomeData =useContext(Storedata)
  const dispatch =useDispatch()

  const shuffledImages = [...HomeData]
//  for (let i = shuffledImages.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
//   }
const selectedImages = shuffledImages.slice(17, 23);

// for changing the image in every interval
const images = [
'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Revamp/D54261251_IN_PC_Laptops_PageRevamp_BAU_HEDDER_1242x450.jpg',
'https://www.newzli.com/wp-content/uploads/2022/05/SL-5_Electronics_1000X300-1.jpg',
'https://www.takemetechnically.com/wp-content/uploads/2023/05/amazon-great-summer-sale-2023-offers-up-to-70-off-on-gaming-laptops-and-gadgets.webp'
];    

const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, 5000); 
  return () => clearInterval(interval); 
}, [images.length]);

// ........
const ScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


  return (
    <>
   <div className='Home_Container'>
   <div className='display_Image'>
    <img src={images[currentImageIndex]} alt='product_images'/>
   </div>

   <div className='BestSeller_container'>
    <h2 style={{backgroundColor:'grey'}}>Best Seller</h2>
   <div className='BestSeller_Products'>
   {
 selectedImages.map((data,index)=>{
  return(
    <div key={index} className='Particular_product_Container'>

  <Link to={"/Data/"+data._id+data.id} state={{id:data._id}} onClick={ScrollToTop}>
<img  src={data.image} alt='product_logo'/>
</Link>
<div className='description'>
<p>{data.heading}</p>
<p style={{color:'green',fontWeight:'bold'}}>Price: {data.price}</p>

</div>
<button onClick={()=>{
  const SelectedProduct =HomeData.find((item)=>item._id===data._id)
  dispatch(Add(SelectedProduct))
  alert('Product Added')
}}>Add to cart</button>
</div>
  )
})
    }
   </div>
   </div>
   <div className='Policy_Container'>
   <div className='Particular_Policy_Container'>
<img src='https://ecommerce-prjctt.netlify.app/shipping.svg' alt='product_logo'/>
<div>
<h3>Free Shipping</h3>
<p style={{fontSize:10}}>Welcome to our online store, where shopping just got even more rewarding! We're excited to introduce our exclusive Free Shipping offer, designed to make your shopping experience truly delightful.</p>
</div>
</div>
<div className='Particular_Policy_Container'>
<img src='https://ecommerce-prjctt.netlify.app/refund.svg' alt='product_logo'/>
<div>
<h3>100% Refund</h3>
<p style={{fontSize:10}}>Our 100% Refund Guarantee: Your Peace of Mind, Our Promise.At [Treat yo'self], your satisfaction is our top priority. We understand that sometimes things may not go as planned, and that's why we're proud to offer a 100% Refund Guarantee. With this assurance.</p>
</div>
</div>
<div className='Particular_Policy_Container'>
<img src='https://ecommerce-prjctt.netlify.app/support.svg' alt='product_logo'/>
<div>
<h3>Support 24/7</h3>
<p style={{fontSize:10}}>At [Treat yo'self], your satisfaction is our priority, and that's why we're thrilled to offer 24/7 support. We understand that your needs don't follow a schedule, and neither do we. With our always-on support, you can shop, inquire, and resolve issues whenever it's convenient for you.</p>
</div>
</div>
    
   </div>

   </div>
   <Footer/>
    </>

  )
}

export default Home