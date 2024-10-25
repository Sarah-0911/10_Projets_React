import { configureStore } from "@reduxjs/toolkit"
import tabsReducer from "./features/tabsSlice.js"
import previewReducer from "./features/previewSlice.js"

export const store = configureStore({
  reducer: {
    tabs: tabsReducer,
    preview: previewReducer
  }
})
