import { createSlice } from "@reduxjs/toolkit";
 
const ItemCountSlice =createSlice({
    name:"CountSlice",
    initialState:1,
    reducers:{
        AddItem:(state, action) => {
            return state+=action.payload
          }
        ,
        SubItem:(state,action)=>{
            return state-=action.payload
        }
    }
})

export const{AddItem,SubItem}=ItemCountSlice.actions;
export default ItemCountSlice.reducer;