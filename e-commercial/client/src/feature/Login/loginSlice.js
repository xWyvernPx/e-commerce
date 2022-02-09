import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loginProcess : "NONE",
    loginState : false ,
    loginInfo: {} ,

} 
const loginSlice = createSlice({
    initialState,
    name : "login",
    reducers : {
         login : (state,payload) => {
             state.loginProcess = "LOGGING IN";
         },
        loginSuccessful : (state,payload) => {
            state.loginProcess= "SUCCESSFUL";
            state.loginInfo = {...payload.payload};
            state.loginState = true;
        },
        loginFailed : (state,payload) =>{
            state.loginProcess = "FAILED";
        }
    }
});
export const {login,loginFailed,loginSuccessful} = loginSlice.actions;
export default loginSlice.reducer;