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
      const clonedList = [...state.list]; // Clone la liste
      const pickedProduct = clonedList.findIndex(product => product.id === action.payload);

      if (pickedProduct !== -1) {
        clonedList[pickedProduct].picked = true;
      }
      state.list = clonedList; // Remplace la liste après modification
    }
  }
})

export default productsSlice.reducer;

export const { setProductsBase, pickProduct } = productsSlice.actions;

export const getProductsData = (action) => async(dispatch, getState) => {

  const response = await fetch("data/inventory.json");
  const data = await response.json();
  // console.log(data);

  dispatch(setProductsBase(data.products))

}
