import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {Link, NavLink}from 'react-router-dom'

const Header = () => {
    const[menu,setmenu]=useState(true)
    const [showSubLinks, setShowSubLinks] = useState(false);
    const [MobileSubLinks, setMobileSubLinks] = useState(false);
    const [ClothsSubLinks, setClothsSubLinks] = useState(false);
    const [LaptopSubLinks, setLaptopSubLinks] = useState(false);
    const [WatchsSubLinks, setWatchsSubLinks] = useState(false);

  const handleMouseEnter = () => {
    setShowSubLinks(!showSubLinks);
  };

  // const handleMouseLeave = () => {
  //   setShowSubLinks(false);
  // };

  const CartCount=useSelector((state)=>state.InDe.length)
  // console.log(CartCount);
  return (
    <>
   

<div className='NavBar'>


       
       
        

        <div className='Ham_icon' onClick={()=>{setmenu(!menu)}}>
        <div className='bar bar1'></div>
        <div className='bar bar2'></div>
        <div className='bar bar3'></div>
        </div>

       
        

        
      <div id='NavLinks'>
      <div className='heading'>
        <Link to ="/" className='NAV'>
        <span className='heading1'><img src='https://logo.com/image-cdn/images/kts928pd/production/16e479a89e4fd9e607f8b4c9861f85a13307230e-392x400.png?w=1080&q=72'alt='logo'/></span>
        </Link> 
        <h3 className='heading2'> ME SHOPPING</h3>
  
        </div>
       <NavLink className='NAV'  style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/">Home</NavLink>
      <div><NavLink  className='NAV'onMouseEnter={handleMouseEnter}  style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/Accessories">Accessories</NavLink>
      {showSubLinks && (
        <div  className='sub_links'  onMouseLeave={handleMouseEnter}>
      <div>
        <ul>
          <li>Charger</li>
          <li>Powerbank</li>
          <li>FastCharger</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Headphones</li>
        </ul>
      </div>
          
        </div>
      )}
      </div> 
      <div>
      <NavLink   className='NAV'onMouseEnter={()=>setMobileSubLinks(!MobileSubLinks)}  style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})}to="/Mobiles">Mobiles</NavLink>
      {MobileSubLinks && (
        <div  className='sub_links'  onMouseLeave={()=>setMobileSubLinks(!MobileSubLinks)}>
          <div>
        <ul>
          <li>RealMe</li>
          <li>Vivo</li>
          <li>Apple</li>
        </ul>
      </div>
      <div>
        <ul>
          <h3>Accessories</h3>
          <li>Headphones</li>
          <li>Chargers</li>
        </ul>
      </div>
        </div>
      )}
      </div>
      <div>
      <NavLink  className='NAV'onMouseEnter={()=>setClothsSubLinks(true)} style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/Clothes">Clothes</NavLink>
      {ClothsSubLinks && (
        <div  className='sub_links'onMouseEnter={()=>setClothsSubLinks(true)} onMouseLeave={()=>setClothsSubLinks(false)}>
          <div>
        <ul>
          <li>Charger</li>
          <li>Powerbank</li>
          <li>FastCharger</li>
        </ul>
      </div>
      <div>
        <ul>
        <h3>Accessories</h3>
          <li>Headphones</li>
          <li>Chargers</li>
        </ul>
      </div>
        </div>
      )}
      </div>
      <div>
      <NavLink  className='NAV'onMouseEnter={()=>setWatchsSubLinks(true)}   style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/Watches">Watches</NavLink>
      {WatchsSubLinks && (
        <div  className='sub_links' onMouseEnter={()=>setWatchsSubLinks(true)} onMouseLeave={()=>setWatchsSubLinks(false)}>
         <div>
        <ul>
          <li>FastTrack</li>
          <li>Titan</li>
          <li>Casio</li>
        </ul>
      </div>
      <div>
        <ul>
        <h3>Accessories</h3>
          <li>Headphones</li>
          <li>Chargers</li>
        </ul>
      </div>
        </div>
      )}
      </div>
<div>
<NavLink  className='NAV'onMouseEnter={()=>setLaptopSubLinks(true)} onMouseLeave={()=>setLaptopSubLinks(false)}style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/Laptops">Laptops</NavLink>
{LaptopSubLinks && (
        <div  className='sub_links'onMouseEnter={()=>setLaptopSubLinks(true)} onMouseLeave={()=>setLaptopSubLinks(false)}>
          <div>
        <ul>
          <li>Acer</li>
          <li>Dell</li>
          <li>hp</li>
        </ul>
      </div>
      <div>
        <ul>
        <h3>Accessories</h3>
          <li>Headphones</li>
          <li>Chargers</li>
        </ul>
      </div>
          
        </div>
      )}
    </div>   
    <div className='Upper_task_bar'>
    
    <div className='User_Help_bar'>
    <div><input type='text'placeholder='Search Here by Brands'/></div>
    <Link className='cart_logo' to='AddToCart'>   
    <img src='https://www.clker.com/cliparts/X/U/F/3/N/2/shopping-cart-logo.svg' alt='cart_logo'/><span>{CartCount}</span>
</Link>
   <Link to='/profile' className='profile_logo'><img src='https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo.png' alt='profile_logo'/></Link> 
       
        
    </div>
    </div>    
       </div>
       
       
       <br/>
      </div>
      <div className='display_menu' >
        <NavLink className={menu?"Hamburger_menu":" menu "} style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/">Home</NavLink>
       <NavLink  className={menu?"Hamburger_menu":" menu"} style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/Accessories">Accessories</NavLink>
       <NavLink   className={menu?"Hamburger_menu":" menu"}style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})}to="/Mobiles">Mobiles</NavLink>
       <NavLink  className={menu?"Hamburger_menu":" menu"}style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/Clothes">Clothes</NavLink>
       <NavLink  className={menu?"Hamburger_menu":" menu"}style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/Watches">Watches</NavLink>
       <NavLink  className={menu?"Hamburger_menu":" menu"}style={({isActive})=>({color:isActive?"rgb(0, 137, 196)":" "})} to="/Laptops">Laptops</NavLink>


        </div>
       

    </>
  )
}

export default Header