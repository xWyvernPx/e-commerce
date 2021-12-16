import { combineReducers } from "@reduxjs/toolkit";
import LandingReducer from "../feature/Landing/landingSlice"
const rootReducer = combineReducers({
   LandingReducer,
})
export default rootReducer;