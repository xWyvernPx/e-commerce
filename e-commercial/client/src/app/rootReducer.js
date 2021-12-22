import { combineReducers } from "@reduxjs/toolkit";
import LandingReducer from "../feature/Landing/landingSlice"
import productPageReducer from "../feature/ProductPage/productPageSlice";
const rootReducer = combineReducers({
   LandingReducer,
   productPageReducer,
})
export default rootReducer;