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
    }
  }
})

export default productsSlice.reducer;

export const { setProductsBase } = productsSlice.actions;

export const getProductsData = (action) => async(dispatch, getState) => {

  const response = await fetch("data/inventory.json");
  const data = await response.json();
  // console.log(data);

  dispatch(setProductsBase(data.products))

}
