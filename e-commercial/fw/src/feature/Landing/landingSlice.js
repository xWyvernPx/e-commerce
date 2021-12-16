import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    onLoading : false,
    data : null,
    message : "Empty",
    random : []
}

export const landingSlice = createSlice({
    name : "category",
    initialState ,
    reducers : {
        loadList : (state ,action) =>{
            state.onLoading = true ;
            state.message = "On loading";
            
        },
        loadListSuccess : (state,action) =>{
            state.onLoading = false ;
            // console.log("ok slcie")
            state.data = action.payload;
            state.message = "Success";
        },
        loadListFailed : (state,action) =>{
            state.onLoading= false;
            state.message =  "Failed";
            // console.log(state.message, " at slice")
        },
        
        loadRandom : (state) =>{
            console.log("ok random slice");
        },
        loadRandomFinish :(state, action) => {
            state.random = action.payload;
        }

    }

})
export const {loadList,loadListFailed,loadListSuccess,loadRandom,loadRandomFinish} = landingSlice.actions;
export const getData =  (state) => state.rootReducer.LandingReducer
export const getRandom =  (state) => state.rootReducer.LandingReducer.random
export default landingSlice.reducer;