import React from 'react'
import { useSelector } from 'react-redux'

const SearchedCompo = () => {
    const SearchData =useSelector((state)=>state.Search)
    console.log(SearchData);
  return (
    <div>SearchedCompo</div>
  )
}

export default SearchedCompo