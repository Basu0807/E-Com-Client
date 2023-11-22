import { createSlice } from "@reduxjs/toolkit";
 
// const addItemToArray = (state, action) => {
//     state.push(action.payload)
//   }
const CartSlice =createSlice({
    name:"textSlice",
    initialState:{
        Cart:[],
        quantity:0,
        Total:0
    },
    reducers:{
        Add:(state, action) => {
            state.Cart.push(action.payload)
          }
        ,
        Remove:(state,action)=>{
        const itemId =action.payload;
         state.Cart=state.Cart.filter((item)=>item._id !==itemId)
          },
          Increase:(state, action) => {
            const itemId =action.payload
            const Item=state.Cart.find((item)=>item._id ===itemId)
            Item.quantity=Item.quantity+1
          }
        ,
        Decrease:(state,action)=>{
            const itemId =action.payload
            const Item=state.Cart.find((item)=>item._id ===itemId)
            Item.quantity=Item.quantity-1
        },
        TotalAmount:(state)=>{
            let quantity =0
            let total =0
            state.Cart.forEach((item)=>{
                quantity+=item.quantity
                total += item.quantity*item.price
            }) 
            
            state.quantity=quantity
            state.Total=total

        }
    }
})

export const{Add,Remove,Increase,Decrease,TotalAmount}=CartSlice.actions;
export default CartSlice.reducer;