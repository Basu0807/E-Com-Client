import React from 'react'
import { Link } from 'react-router-dom'
// import { Storedata } from './Routes/RoutesCompo'

const Home = () => {
  // const ProductData =useContext(Storedata)
  return (
    <>
   Welcome to our Shop
   <div className='linkcontainer'>
    <div><Link to='/login' className='links'>Login</Link></div>
   <div><Link to='/signup' className='links'>Signup</Link></div>
    </div>
    </>

  )
}

export default Home