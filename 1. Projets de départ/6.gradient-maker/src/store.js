import { configureStore } from "@reduxjs/toolkit";
import gradientReducer from "./features/gradientSlice";

export const store = configureStore({
  reducer: {
    gradient: gradientReducer,
  }
})
