import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: [
    {
      id: 1,
      color: "#00d2ff",
      position: 20,
    },
    {
      id: 2,
      color: "#ee9ca7",
      position: 50,
    },
  ],
  pickedColorID: 1,
  angle: 60
}

export const gradientSlice = createSlice({
  name: "gradient",
  initialState,
  reducers: {

  }
})

export default gradientSlice.reducer;
