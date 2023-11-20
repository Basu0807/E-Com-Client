import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ItemCountSlice from "./ItemCountSlice";
import SearchedSlice from "./SearchedSlice";

 export const Store =configureStore({
    reducer:{
        InDe:CartSlice,
        Count:ItemCountSlice,
        Search:SearchedSlice
    }
 })