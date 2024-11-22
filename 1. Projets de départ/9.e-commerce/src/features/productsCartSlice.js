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
    addOne: (state, action) => {
      // const productIndex = state.cart.findIndex(product => product.id === action.payload.id);
      // if (productIndex === -1) {
      //   state.cart.push({...action.payload, quantity: 1});
      // } else {
      //   state.cart[productIndex].quantity++
      // }
    },
    updateTotalQuantity: (state, action) => {
      state.totalQuantity++
    },
  }
})

export default productsCartSlice.reducer;

export const { addOne, updateTotalQuantity } = productsCartSlice.actions;
