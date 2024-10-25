import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  preview: true
}

export const previewSlice = createSlice({
  name: "preview",
  initialState,
  reducers: {
    togglePreview: (state) => {
      state.preview = !state.preview
    },
    hidePreview: (state) => {
      state.preview = false
    }
  }
})

export const { togglePreview, hidePreview } = previewSlice.actions;

export default previewSlice.reducer;
