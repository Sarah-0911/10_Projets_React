import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: 0,
  totalDuration: 0
}

export const progressSlice = createSlice({
  name:"progress",
  initialState,
  reducers: {
    fillDurationVariables: (state, action) => {
      state.current = action.payload.currentTime;
      state.totalDuration = action.payload.totalDuration;
    },
    updateProgress: (state, action) => {
      state.current = action.payload;
    }
  }
})

export const { fillDurationVariables, updateProgress } = progressSlice.actions;

export default progressSlice.reducer;
