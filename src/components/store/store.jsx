import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";

const store = configureStore({
    //reducer
    reducer:{
        auth: authSlice
}})


export default store;