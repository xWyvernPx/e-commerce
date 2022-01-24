import { combineReducers } from "@reduxjs/toolkit";
import LandingReducer from "../feature/Landing/landingSlice"
import productPageReducer from "../feature/ProductPage/productPageSlice";
import loginReducer from "../feature/Login/loginSlice"
const rootReducer = combineReducers({
   LandingReducer,
   productPageReducer,
   loginReducer,
})
export default rootReducer;