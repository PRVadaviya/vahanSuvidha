// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name:'cart',
//     initialState:[],
//     reducers:{
//         addToCart : (state,action) =>{
//             state.push(action.payload)
//         },
//         removeFromCart : (state,action)=>{
//             return state.filter((item)=>item.name !== action.payload.name)
//         }
//     }
// })

// export default cartSlice.reducer

// export const {addToCart,removeFromCart} = cartSlice.actions

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            // Check if the item already exists in the cart
            const existingItem = state.find(item => item.vehicleNumber === action.payload.vehicleNumber);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                // Start quantity at 1 when added for the first time
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.vehicleNumber !== action.payload.vehicleNumber);
        },
        increaseQuantity: (state, action) => {
            const item = state.find(item => item.vehicleNumber === action.payload.vehicleNumber);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const index = state.findIndex(item => item.vehicleNumber === action.payload.vehicleNumber);
            if (index !== -1) {
                if (state[index].quantity > 1) {
                    state[index].quantity -= 1;
                } else {
                    state.splice(index, 1); // Properly remove the item
                }
            }
        }
    }
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
