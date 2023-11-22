import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

import SearchedSlice from "./SearchedSlice";

 export const Store =configureStore({
    reducer:{
        InDe:CartSlice,
        Search:SearchedSlice
    }
 })