import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Profile = () => {

    const navigate =useNavigate()

    const HandleClick=()=>{
        localStorage.removeItem('token')
        alert('You will be logged out')
        navigate('/login')
          }

          const [user,setuser]=useState([])
          console.log(user);
          const token =localStorage.getItem("token")

  // console.log(itemCount);
  useEffect(()=>{
    if(token){
      axios.get('https://e-com-server-ce50.onrender.com/user/profile',{headers:{
        "authorization":`Bearer ${token}`
      }}).then((res)=>setuser(res.data))
      .catch((err)=>console.log(err))
    }
    else{
        alert('please login')
      navigate('/login')
    }
      },[token,navigate])
    
  return (
    <div className='dashboard'>
    <h1 >{user}</h1>
    <button onClick={HandleClick} style={{width:50,backgroundColor:'black',color:'white'}}>Logout</button>
    </div>
  )
}

export default Profile