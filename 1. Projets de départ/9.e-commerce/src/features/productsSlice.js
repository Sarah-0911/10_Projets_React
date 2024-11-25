import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
  }

export const productsSlice = createSlice({
  name:"products",
  initialState,
  reducers: {
    setProductsBase: (state, action) => {
      state.list = action.payload;
    },
    pickProduct: (state, action) => {
      const productIndex = state.list.findIndex(product => product.id === action.payload);
      if (productIndex !== -1) {
        state.list[productIndex].picked = true;
      }
    },
    unpickProduct: (state, action) => {
      const productIndex = state.list.findIndex(product => product.id === action.payload.id);
      if (productIndex !== -1) {
        state.list[productIndex].picked = false;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase("cart/createCartItem", (state, action) => {
      // Quand le reducer "cart/createCartItem" est déclenché (quand un produit est ajouté au cart),
      // ça met à jour la propriété "picked" du produit correspondant dans "state.list" à true.
      state.list.find(product => product.id === action.payload.id).picked = true;
      // action.payload correspond au newCartItem passé dans le thunk addOneToCart.
    })
  }
})

export default productsSlice.reducer;

export const { setProductsBase, pickProduct, unpickProduct } = productsSlice.actions;

export const getProductsData = (action) => async(dispatch, getState) => {

  const response = await fetch("data/inventory.json");
  const data = await response.json();
  // console.log(data);

  dispatch(setProductsBase(data.products))
}
