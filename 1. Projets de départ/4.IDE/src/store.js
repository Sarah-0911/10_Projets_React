import { configureStore } from "@reduxjs/toolkit"
import tabsReducer from './features/tabsSlice.js'

export const store = configureStore({
  reducer: {
    tabs: tabsReducer,
  }
})
