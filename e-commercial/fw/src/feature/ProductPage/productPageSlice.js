import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    status : "",
    category : null,
    subcategory : null ,
}
const productPageSlice = createSlice({
    name : "ProductPage",
    initialState,
    reducers : {
        fetchCateInfo : (state,payload)=> {
            state.status="On fetching category";
        },
        fetchCateInfoSuccess : (state,payload) => {
            state.status = "Fetching category info successful";
            const {category,subcategory} = payload.payload;
            console.log( payload.payload)
            if(category) state.category = category;
            if(subcategory) state.subcategory = subcategory;

        },
        fetchCateInfoFailed : (state,payload) => {
            state.status = "Fetching category info failed!";
        }
    }
})

export const {fetchCateInfo,fetchCateInfoSuccess,fetchCateInfoFailed} = productPageSlice.actions;
export default productPageSlice.reducer;