import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
  }

export const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers: {
    createCartItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    updateItemFromSelect: (state, action) => {
      const currentProduct = state.cartItems.find(product => product.id === action.payload.id);
      currentProduct.quantity = Number(action.payload.value);
    },
    removeFromCart: (state, action) => {
      const indexItemToRemove = state.cartItems.findIndex(product => product.id === action.payload);
        state.cartItems.splice(indexItemToRemove, 1);
    },
  }
})

export default cartSlice.reducer;

export const { createCartItem, updateItemFromSelect, removeFromCart } = cartSlice.actions;

export const addOneToCart = (action) => (dispatch, getState) => {
  const storeState = getState();
  const isAlreadyPresent = storeState.cart.cartItems.find(item =>item.id === action);

  if (!isAlreadyPresent) {
    const itemToAdd = storeState.products.list.find(item => item.id === action);
    const newCartItem = {...itemToAdd, quantity: 1}
    dispatch(createCartItem(newCartItem));
  }
}
