import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ItemCountSlice from "./ItemCountSlice";

 export const Store =configureStore({
    reducer:{
        InDe:CartSlice,
        Count:ItemCountSlice
    }
 })