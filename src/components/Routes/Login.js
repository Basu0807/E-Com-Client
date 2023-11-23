import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  const[data,setData]=useState({
    email:"",
    password:""
})


const navigate =useNavigate()

const InputHandler=(e)=>{
setData((pre)=>{
return{...pre,[e.target.name]:e.target.value}
})
}
//  console.log(data);

const SubmitHandler= async(event)=>{
event.preventDefault()
// console.log(data); 
await axios.post('https://e-com-server-ce50.onrender.com/user/login',data)
.then((res)=>{
alert(res.data.msg)
  if(res.data.token){
    localStorage.setItem("token",res.data.token)
    navigate('/AddToCart')
  }
  else{
    navigate('/login')
  }




})
.catch((err)=>console.log(err))

setData({
email:"",
password:""
})




}
return (
<>
<div className='mainContainer'>
  <img src='https://www.webibazaar.com/blog/wp-content/uploads/2023/03/10-Best-Shopping-Website-Templates-for-Boosting-Your-E-commerce--scaled.jpg'alt='welcome to the website' />
  
  <div className='formContainer'>

  
    
   
<form onSubmit={SubmitHandler}>
                <h1>Login Here</h1>
    
            <label htmlFor="Dept">Email Id : </label>
            <input id="Dept" type="email" name="email" value={data.email}  onChange={InputHandler} placeholder="abc@gmail.com" required autoComplete='registered email'/><br></br>
            <label htmlFor="Ratinng">Password : </label>
            <input id="Rating" type="password" name="password" value={data.password}  onChange={InputHandler} required autoComplete='registered-password'/><br></br>

            <button className="btn" type='submit'>Submit</button><br/>
            Don't have an account? <Link to='/signup'>Signup</Link>
            </form>
            </div>
    </div>
</>

)
}

export default Login