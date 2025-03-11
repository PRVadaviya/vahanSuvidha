import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/AddToCart/cartSlice'
import searchDataReducer from './features/searchData/searchData'
import authSliceReducer from './features/Authentication/AuthSlice'

export default configureStore({
    reducer:{
        'cart':cartReducer,
        'search':searchDataReducer,
        'login' : authSliceReducer
    }
})