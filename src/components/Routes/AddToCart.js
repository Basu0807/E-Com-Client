import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import{AddItem,SubItem} from '../Redux/ItemCountSlice'
import { useNavigate } from 'react-router';
import axios from 'axios';
// import { Link } from 'react-router-dom';

const AddToCart = () => {
  const CartItems=useSelector((state)=>state.InDe)
  const itemCount=useSelector((state)=>state.Count)
  console.log(itemCount);
  const dispatch=useDispatch()
  const navigate =useNavigate()
  const token =localStorage.getItem("token")
const [user,setuser]=useState([])
 
  useEffect(()=>{
    if(token){
      axios.get('https://localhost:4000/user/profile',{headers:{
        "authorization":`Bearer ${token}`
      }}).then((res)=>setuser(res.data))
      .catch((err)=>console.log(err))
    }
    else{
      alert('Please Login first')
      navigate('/login')
    }
      },[token,navigate])
    
    
    
  return (
   
      <div className='Cart_Container'>

        <table className='CartTable'>
          <thead>
          <tr>
            <td>Item Image</td>
            <td>Model</td>
            <td>Quantity</td>
            <td>Price</td>
          </tr>
          </thead>
          
          
            
            {
    CartItems && CartItems.map((item,index)=>{
      return(
      <tbody key={index}>

<tr >
        <td><img src={item.image} alt='product_image'/></td>
       <td>{item.Model}</td>
       <td><button onClick={()=>dispatch(AddItem(1))}>+</button>{itemCount}<button onClick={()=>dispatch(SubItem(1))}>-</button></td>
       <td>{item.price}</td>
       </tr>
      </tbody>
       

       
       
       
        
      )
    })
  }
            
          
        </table>
  
  </div>
     
  )
}


export default AddToCart