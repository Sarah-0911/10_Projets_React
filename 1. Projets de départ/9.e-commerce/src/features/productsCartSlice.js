import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0
  }

export const productsCartSlice = createSlice({
  name:"productsCart",
  initialState,
  reducers: {
    updateTotalQuantity: (state) => {
      state.totalQuantity++
    },
    updateTotalPrice: (state, action) => {
      state.totalPrice += action.payload;
    },
    addToCart: (state, action) => {
      const productIndex = state.cart.findIndex(product => product.id === action.payload.id);
      if (productIndex !== -1) {
        state.cart[productIndex].quantity++;
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {

    },
  }
})

export default productsCartSlice.reducer;

export const { addToCart, removeFromCart, updateTotalQuantity, updateTotalPrice } = productsCartSlice.actions;
