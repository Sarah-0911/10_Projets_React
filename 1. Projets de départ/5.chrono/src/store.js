import { configureStore } from "@reduxjs/toolkit";
import chronoReducer from "./features/chronoSlice"

export const store = configureStore({
  reducer: {
    chrono: chronoReducer,
  }
})
