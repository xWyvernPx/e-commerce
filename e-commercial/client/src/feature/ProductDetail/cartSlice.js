import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart : [],
    total : 0,
}
export const cartSlider = createSlice({
name : "cart",
initialState,
reducers : {
    loadCart: ()=> {},
    
    addToCart : (state,action) =>{
       const dupliCheck = state.cart.find(item => item.product.productID === action.payload.productId);
       if(dupliCheck){
           dupliCheck.quantity += action.payload.quantity;
       }
       else {
              state.cart.push(action.payload);
       }
    },
    removeFromCart : (state,action) =>{
        state.cart.splice(action.payload,1);
        state.total -= state.cart[action.payload].price;
    },
    clearCart : (state) =>{
        state.cart = [];
        state.total = 0;
    }
}
})
export const { addToCart,removeFromCart,clearCart } = cartSlider.actions
export default cartSlider.reducer;