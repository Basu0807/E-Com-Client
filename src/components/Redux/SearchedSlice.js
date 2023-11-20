import { createSlice } from "@reduxjs/toolkit";
 
const SearchedSlice =createSlice({
    name:"SearchSlice",
    initialState:[],
    reducers:{
        SearchItem:(state, action) => {
            return state =action.payload
          }
        ,
    }
})

export const SearchItem=SearchedSlice.actions;
export default SearchedSlice.reducer;