import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0
  }

export const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers: {
    updateTotalQuantity: (state) => {
      state.totalQuantity++
    },
    updateTotalPrice: (state, action) => {
      state.totalPrice += action.payload;
    },
    createCartItem: (state, action) => {
      // const productIndex = state.cartItems.findIndex(product => product.id === action.payload.id);
      // if (productIndex === -1) {
      //   state.cartItems.push({...action.payload, quantity: 1}); // quantity initialisé à 1 quand product ajouté pour la 1ere fois
      // } else {
      //   state.cartItems[productIndex].quantity++;
      // }
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

export const { createCartItem, removeFromCart, updateTotalQuantity, updateTotalPrice } = cartSlice.actions;

export const addOneToCart = (action) => (dispatch, getState) => {
  const storeState = getState();
  const isAlreadyPresent = storeState.cart.cartItems.find(item =>item.id === action);

  if (!isAlreadyPresent) {
    const itemToAdd = storeState.products.list.find(item => item.id === action);
    const newCartItem = {...itemToAdd, quantity: 1}
    dispatch(createCartItem(newCartItem));
  }
}
