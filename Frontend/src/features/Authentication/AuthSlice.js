import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
     name:'login',
     initialState:{
          isAuthenticated :!!localStorage.getItem("vahanSuvidha_email"),
          email : localStorage.getItem("vahanSuvidha_email") || null
     },
     reducers : {
          login : (state,action) =>{
               state.email = action.payload.email
               state.isAuthenticated = true
               localStorage.setItem('vahanSuvidha_email',state.email)
          },
          logout : (state) => {
               state.email = ''
               state.isAuthenticated = false
               localStorage.removeItem('vahanSuvidha_email')
          }
     }
})

export default authSlice.reducer

export const {login,logout} = authSlice.actions