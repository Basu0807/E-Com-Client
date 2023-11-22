import { createSlice } from "@reduxjs/toolkit";
 
const SearchedSlice =createSlice({
    name:"SearchSlice",
    initialState:[],
    reducers:{
        SearchItem:(state, action) => {
            console.log(action.payload);
          return  state=(action.payload)
            // return state =[...state,action.payload];
          },
    }
})

export const {SearchItem}=SearchedSlice.actions;
export default SearchedSlice.reducer;