import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./features/playlistSlice"
import progressReducer from "./features/progressSlice"

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
    progress: progressReducer
  }
})
