import { createSlice } from "@reduxjs/toolkit";
 
// const addItemToArray = (state, action) => {
//     state.push(action.payload)
//   }
const CartSlice =createSlice({
    name:"textSlice",
    initialState:[],
    reducers:{
        Add:(state, action) => {
            state.push(action.payload)
          }
        ,
        Remove:(state,action)=>{
            return state=action.payload
        }
    }
})

export const{Add,Remove}=CartSlice.actions;
export default CartSlice.reducer;