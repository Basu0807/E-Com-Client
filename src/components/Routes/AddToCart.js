import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Decrease, Increase, Remove } from '../Redux/CartSlice';
import { Link } from 'react-router-dom';
import Footer from '../Layout/Footer';

const AddToCart = () => {
  const CartItems=useSelector((state)=>state.InDe.Cart)
  const Total=useSelector((state)=>state.InDe.Total)
  const quantity=useSelector((state)=>state.InDe.quantity)
  
  const dispatch=useDispatch()
  const navigate =useNavigate()
  const token =localStorage.getItem("token")

 
  useEffect(()=>{
    if(token){
      axios.get('https://e-com-server-ce50.onrender.com/user/profile',{headers:{
        "authorization":`Bearer ${token}`
      }}).then((res)=>console.log(res.data))
      .catch((err)=>console.log(err))
    }
    else{
      alert('Please Login first')
      navigate('/login')
    }
      },[token,navigate])
    
      const BuyNow=async()=>{
        await axios.post('http://localhost:4000/checkout',{
          quantity:quantity,
          total:Total
        }).then((res)=>console.log(res))
      .catch((err)=>console.log(err))
}
    
    
  return (

    <>
   
   {CartItems.length !==0 ? 
    <div className='Cart_Container'>
    <div className='Cart_Products'>
      {
        CartItems && CartItems.map((item,index)=>{
    
          return(
           <div className='Added_Product' key={index}>
    <Link  to={"/Data/"+item._id} state={{id:item._id}} ><img src={item.image} alt='product_image'/> </Link>
    <div className='Added_Product_details'>
      <p style={{fontWeight:'bold',height:70}}>{item.heading}</p>
      <p style={{color:'green',fontWeight:'bold'}}>PRICE:₹{item.price}</p>  
      <div className='Count_btn_Container'><button className='count_btn' onClick={()=>dispatch(Increase(item._id))}>+</button>{item.quantity}
      <button onClick={()=>{
        if(item.quantity===1){
          dispatch(Remove(item._id))
        }
        else{
          dispatch(Decrease(item._id))
        }
      }}className='count_btn'>-</button>
      <button onClick={()=>dispatch(Remove(item._id))} style={{color:'white',backgroundColor:'black'}}>Remove</button></div>
      </div>
    
            </div>
          )
        })
      }
    
    </div>
    <div className='Total_Container'>
      <h1 style={{color:'red'}}>Total Amount:₹{Total}</h1>
      <h2>Total Number of items Added - {quantity}</h2>
    
      <button className='BuyNow_btn' onClick={BuyNow}>Buy Now</button>
    </div>
      </div>
    : 
    <div className='Cart_Container'>
    <div className='Cart_Products'>
     <h1>No Items added Yet</h1>
    
    </div>
    <div>
      <Link to='/' style={{textDecoration:'none'}}><h1 style={{color:'white',backgroundColor:'black',borderRadius:5,padding:5}}>Shop Now</h1></Link>
    </div>
    
      </div>} 
  
      <Footer/>
      
    </>
   
     

     
  )
}


export default AddToCart