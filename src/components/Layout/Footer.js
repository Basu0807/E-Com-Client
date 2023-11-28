import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
  <>
  <div className='footer'>
    <div className='company_details'>
    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg' alt='notfound'/>

        <p>PrepBytes students get mentored by industry experts who have achieved in their careers and are passionate about helping students achieve their dream.</p>
        {/* <p>Thanks PrepBytes Your course really helped me lot , helped me Crack my company Nagarro through my campus placements. I also cracked TCS Codevita.Thank you so much.</p> */}
</div>
<div className='Products'>

  <h3>Categories</h3>
  <Link className='footer_links' onClick={()=>ScrollToTop()}to="/">Home</Link>
  <Link  className='footer_links' onClick={()=>ScrollToTop()}to="/Accessories">Accessories</Link>
  <Link  className='footer_links' onClick={()=>ScrollToTop()}to="/Laptops">Laptops</Link>
  <Link  className='footer_links' onClick={()=>ScrollToTop()}to="/Mobiles">Mobiles</Link>
  <Link  className='footer_links' onClick={()=>ScrollToTop()}to="/Watches">Watches</Link>
  
    
       
</div>

<div className='Resourses'>
  <h3>Resourses</h3>
  <p>Contact Us</p>
  <p> Help center</p>
  <p>About Us</p>
</div>
<div className='find_me'>
  <h2>Find ME ?</h2>
  <img src='https://worldofprintables.com/wp-content/uploads/2020/12/Social-Icons-01-Free-SVG.png.webp' alt='notfound'/>
<h4>Call Me: 7987481181</h4>
<h4>E-mail Me: vasupandeyji.98@gmail.com</h4>
</div>


  </div>
  </>
  )
}

export default Footer;