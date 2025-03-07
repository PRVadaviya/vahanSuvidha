import { createSlice } from "@reduxjs/toolkit";

const searchDataReducer = createSlice({
     name: "search",
     initialState: {
          country: "",
          state: "",
          city: "",
          pickupDate: "",
          returnDate: "",
          class: "",
     },
     reducers:{
          addToSerchData : (state,action)=>{
               Object.assign(state,action.payload)
          }
     }
})

export default searchDataReducer.reducer

export const {addToSerchData} = searchDataReducer.actions