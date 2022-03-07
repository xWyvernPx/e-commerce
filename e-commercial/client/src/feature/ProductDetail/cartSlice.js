import { createSlice } from "@reduxjs/toolkit"


const cartState = {
    loading : "LOADING_CART",
    loadingSuccess : "LOADING_CART_SUCCESS",
    loadingError : "LOADING_CART_ERROR",
    addToCart : "ADD_TO_CART",
    addToCartSuccess : "ADD_TO_CART_SUCCESS",
    addToCartError : "ADD_TO_CART_ERROR",
}
const initialState = {
    cart : [],
    total : 0,
<<<<<<< HEAD
    state : ""
}

=======
}
>>>>>>> parent of 4b28cba (lap 28/2)
export const cartSlider = createSlice({
name : "cart",
initialState,
reducers : {
<<<<<<< HEAD
    loadCart: (state,payload) => {
        state.state = cartState.loading; 
    },
=======
    loadCart: ()=> {},
>>>>>>> parent of 4b28cba (lap 28/2)
    
    addToCart : (state,action) =>{
       const dupliCheck = state.cart.find(item => item.product.productID === action.payload.productId);
       if(dupliCheck){
           dupliCheck.quantity += action.payload.quantity;
       }
       else {
              state.cart.push(action.payload);
       }
<<<<<<< HEAD


    },
    loadCartSuccess: (state, action) => {
      state.cart = action.payload;
      state.total = action.payload.length;
      state.state = "SUCCESSFUL";
    },
    loadCartFailure: (state, action) => {
      state.state = "FAIL";
    },
    updateCart: (state, action) => {
      state.state = "UPDATING";
    },
    updateCartSuccess: (state, action) => {
      state.state = "UPDATE SUCCESSFUL";
    },
    updateCartFailure: (state, action) => {
      state.state = "UPDATE FAIL";
    },
    addToCart: (state, action) => {
      const dupliCheck = state.cart.find(
        (item) => item.product.productID === action.payload.productId
      );
      if (dupliCheck) {
        dupliCheck.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart.splice(action.payload, 1);
      state.total -= state.cart[action.payload].price;
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
    },
  },
});
export const getCart = (state) => state.rootReducer.cartReducer.cart;
export const {
  addToCart,
  removeFromCart,
  clearCart,
  loadCart,
  loadCartSuccess,
  loadCartFailure,
  updateCart,
  updateCartFailure,
  updateCartSuccess,
} = cartSlider.actions;
export default cartSlider.reducer;
=======
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
>>>>>>> parent of 4b28cba (lap 28/2)
