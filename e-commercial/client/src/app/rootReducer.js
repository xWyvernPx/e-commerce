import { combineReducers } from "@reduxjs/toolkit";
import LandingReducer from "../feature/Landing/landingSlice"
import productPageReducer from "../feature/ProductPage/productPageSlice";
import loginReducer from "../feature/Login/loginSlice"
import cartReducer from "../feature/ProductDetail/cartSlice";
const rootReducer = combineReducers({
   LandingReducer,
   productPageReducer,
   loginReducer,
   cartReducer,
})
export default rootReducer;