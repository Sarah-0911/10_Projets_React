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
      if (productIndex === -1) {
        state.cart.push({...action.payload, quantity: 1});
      } else {
        state.cart[productIndex].quantity++;
      }
    },
    removeFromCart: (state, action) => {
      const productIndex = state.cart.findIndex(product => product.id === action.payload.id);
      if (productIndex !== -1) {
        const productToRemove = state.cart[productIndex];
        state.totalQuantity -= productToRemove.quantity;
        state.totalPrice -= productToRemove.price * productToRemove.quantity;
        state.cart = state.cart.filter(product => product.id !== action.payload.id);
      }
    },
  }
})

export default productsCartSlice.reducer;

export const { addToCart, removeFromCart, updateTotalQuantity, updateTotalPrice } = productsCartSlice.actions;
