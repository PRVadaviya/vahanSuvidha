import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/AddToCart/cartSlice'

export default configureStore({
    reducer:{
        'cart':cartReducer
    }
})