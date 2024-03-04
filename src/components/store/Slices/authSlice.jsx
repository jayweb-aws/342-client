import { createSlice } from "@reduxjs/toolkit";
//initialize
const initialState = {
    username: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //login
        login: (state,action)=>{
            //update the userstate
            state.username = action.payload;
        },

        //logout
        logout: (state) => {
            //reset the state of the user
            state.username = ""
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;