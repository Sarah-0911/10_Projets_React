import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice"
import productsCartReducer from "./features/productsCartSlice"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productsCart: productsCartReducer
  }
})
