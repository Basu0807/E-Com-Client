import React from 'react'
import { useSelector } from 'react-redux'
import GenericCompo from './GenericCompo';
import Footer from '../Layout/Footer';

const SearchedCompo = () => {
    const SearchData =useSelector((state)=>state.Search)
    console.log(SearchData);
  return (
    <>
    <div className='main_container'>
      {/* <div className='side_container'> 
        <p>nsdofjwn</p>
        <p>nsdofjwn</p>
        <p>nsdofjwn</p>
        <p>nsdofjwn</p>
      </div> */}
      <div className='Product_Container'>
      {
    SearchData && SearchData.map((item,index)=>{
      return(
        
        <GenericCompo
        id={item._id}
        image={item.image} 
        heading={item.Model} 
        price={item.price} key={index}/>
  
      )
    })
  }
      </div>
  
     </div>
     <Footer/>
      </>
  )
}

export default SearchedCompo