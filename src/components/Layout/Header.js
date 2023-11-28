import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, NavLink, useNavigate}from 'react-router-dom'
import { SearchItem } from '../Redux/SearchedSlice';



const Header = () => {

  const dispatch =useDispatch()
  const navigate =useNavigate()
    const[menu,setmenu]=useState(true)

  const[data,setData]=useState({
    search:"",
    item:[]
})

  const InputHandler=(e)=>{
    setData((pre)=>{
    return{...pre,[e.target.name]:e.target.value}
    })
    }

    const Search= async (e)=>{
      e.preventDefault()
     
        axios.get(`https://e-com-server-ce50.onrender.com/store/search/?keyword=${data.search}`)
            .then((res)=>setData({item:res.data.data}))
            .catch((err)=>console.log(err))
            dispatch(SearchItem(data.item))
           setData({
              search:''
            })
          
     
     navigate('/relatedProducts')
      
    }
    console.log(data.item);
    console.log(data.search);

    const HandleClick=()=>{
      localStorage.removeItem('token')
      alert('You will be logged out')
      navigate('/login')
        }
  const CartCount=useSelector((state)=>state.InDe.Cart.length)
  // console.log(CartCount);

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <>
   

<div className='NavBar'>

       <div className='Ham_icon' onClick={()=>{setmenu(!menu)}}>
        <div className='bar bar1'></div>
        <div className='bar bar2'></div>
        <div className='bar bar3'></div>
        
        </div>
        <div className='Search_Bar'>
      <input type='text' name="search" value={data.search} onChange={InputHandler} placeholder='Search Here by Brands' required/>
      <button type='button' onClick={Search}>Search</button>
      <Link className='cart_logo'onClick={ScrollToTop} to='AddToCart'>   
    <img src='https://www.clker.com/cliparts/X/U/F/3/N/2/shopping-cart-logo.svg' alt='cart_logo'/><span>{CartCount}</span>
</Link>
      </div>
    

       <div id='NavLinks'>
      <div className='heading'>
        <Link to ="/" className='NAV'>
        <span className='heading1'><img src='https://logo.com/image-cdn/images/kts928pd/production/16e479a89e4fd9e607f8b4c9861f85a13307230e-392x400.png?w=1080&q=72'alt='logo'/></span>
        </Link> 
        <h3 className='heading2'>SHOP HERE</h3>
  
        </div>
       <NavLink className='NAV' onClick={ScrollToTop} style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/">Home</NavLink>
      <div>
      <nav>
  <ul>
   <li>
   <NavLink  className='NAV' onClick={ScrollToTop} style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/Accessories">Accessories</NavLink>

      <ul className="submenu">
        <li><Link className='submenu_link'to={'/products/Charger'} state={{Brand:'charger'}}>Charger</Link></li>
        <li><Link className='submenu_link' to={'/products/PowerBank'} state={{Brand:'Power Bank'}}>Power Bank</Link></li>
       
        
        <li></li>
      </ul>
    </li>
   
  </ul>
</nav>
      </div> 
      <div>
      <nav>
  <ul>
   <li>
   <NavLink   className='NAV' onClick={ScrollToTop} style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})}to="/Mobiles">Mobiles</NavLink>

      <ul className="submenu">
      <li><Link className='submenu_link' to={'/products/RealMe'} state={{Brand:'realme'}}>RealME</Link></li>
        <li><Link className='submenu_link' to={'/products/Vivo'} state={{Brand:'Vivo'}}>Vivo</Link></li>
      </ul>
    </li>
   
  </ul>
</nav>
      </div>
      <div>
      <nav>
  <ul>
   <li>
   <NavLink  className='NAV' onClick={ScrollToTop} style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/Watches">Watches</NavLink>

      <ul className="submenu">
      <li><Link className='submenu_link' to={'/products/Titan'} state={{Brand:'Titan'}}>Titan</Link></li>
        <li><Link className='submenu_link' to={'/products/Casio'} state={{Brand:'Casio'}}>Casio</Link></li>
        <li><Link className='submenu_link' to={'/products/Fastrack'} state={{Brand:'fastrack'}}>Fastrack</Link></li>
      </ul>
    </li>
   
  </ul>
</nav>
      </div>
<div>
<nav>
  <ul>
   <li>
   <NavLink  className='NAV' onClick={ScrollToTop} style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/Laptops">Laptops</NavLink>

      <ul className="submenu">
      <li><Link className='submenu_link' to={'/products/Acer'} state={{Brand:'Acer'}}>Acer</Link></li>
        <li><Link className='submenu_link' to={'/products/Hp'} state={{Brand:'HP'}}>Hp</Link></li>
        <li><Link className='submenu_link' to={'/products/Dell'} state={{Brand:'Dell'}}>Dell</Link></li>
      </ul>
    </li>
   
  </ul>
</nav>

    </div>   
    <div className='Upper_task_bar'>
    
    <div className='User_Help_bar'>
    <div className='Search_Container'>
      <input type='text' name="search" value={data.search} onChange={InputHandler} placeholder='Search Here by Brands' required/>
      <button type='button' onClick={Search}>Search</button>
      {/* <Link to='/relatedProducts'onClick={Search} state={{data:data.item}}>Search</Link> */}
      <Link className='cart_logo'onClick={ScrollToTop} to='AddToCart'>   
    <img src='https://www.clker.com/cliparts/X/U/F/3/N/2/shopping-cart-logo.svg' alt='cart_logo'/><span>{CartCount}</span>
</Link>
<nav>
  <ul>
   <li>
   <Link to='/profile' className='profile_logo'><img src='https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo.png' alt='profile_logo' /></Link> 

      <ul className="submenu">
        <li><button onClick={HandleClick} style={{width:50,backgroundColor:'black',color:'white'}}>Logout</button></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
        
      </ul>
    </li>
   
  </ul>
</nav>
      </div>

    
   
        
    </div>
    </div>    
       </div>
       
       
       <br/>
      </div>
      <div className='display_menu' >
        <NavLink className={menu?"Hamburger_menu":" menu "} onClick={()=>setmenu(!menu)} style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/">Home</NavLink>
       <NavLink  className={menu?"Hamburger_menu":" menu"} onClick={()=>setmenu(!menu)}style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/Accessories">Accessories</NavLink>
       <NavLink   className={menu?"Hamburger_menu":" menu"} onClick={()=>setmenu(!menu)}style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})}to="/Mobiles">Mobiles</NavLink>
       <NavLink  className={menu?"Hamburger_menu":" menu"}onClick={()=>setmenu(!menu)}style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/Watches">Watches</NavLink>
       <NavLink  className={menu?"Hamburger_menu":" menu"}onClick={()=>setmenu(!menu)}style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/Laptops">Laptops</NavLink>


        </div>
       

    </>
  )
}

export default Header