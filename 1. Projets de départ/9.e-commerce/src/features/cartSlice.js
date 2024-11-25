import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalPrice: 0
  }

export const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers: {
    updateTotalPrice: (state, action) => {
      state.totalPrice += action.payload;
    },
    createCartItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const productIndex = state.cartItems.findIndex(product => product.id === action.payload.id);
      if (productIndex !== -1) {
        const productToRemove = state.cartItems[productIndex];
        state.totalQuantity -= productToRemove.quantity;
        state.totalPrice -= productToRemove.price * productToRemove.quantity;
        state.cartItems = state.cartItems.filter(product => product.id !== action.payload.id);
      }
    },
  }
})

export default cartSlice.reducer;

export const { createCartItem, removeFromCart, updateTotalPrice } = cartSlice.actions;

export const addOneToCart = (action) => (dispatch, getState) => {
  const storeState = getState();
  const isAlreadyPresent = storeState.cart.cartItems.find(item =>item.id === action);

  if (!isAlreadyPresent) {
    const itemToAdd = storeState.products.list.find(item => item.id === action);
    const newCartItem = {...itemToAdd, quantity: 1}
    dispatch(createCartItem(newCartItem));
  }
}
