import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: [
    {
      id: 1,
      value: "#00d2ff",
      position: 20,
    },
    {
      id: 2,
      value: "#ee9ca7",
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
    updateColorValue: (state, action) => {
      const currentColor = state.colors.find(color => color.id === action.payload.id);
      currentColor.value = action.payload.value;
    },
    addColor: (state) => {
      if(state.colors.length === 5) return;

      const newId = state.colors[state.colors.length - 1].id + 1;
      const newPosition = (state.colors[state.colors.length - 1].position) +
      0.1 * (state.colors[state.colors.length - 1].position);
      // newPosition ajoute 10% de position en plus de la dernière couleur (ex ici: ajoute 10% de 50, donc 5);

      state.colors.push({
        id: newId,
        value: "#000000",
        position: newPosition,
      });
    },
    removeColor: (state, action) => {
      if (state.colors.length === 2) return;
      state.colors.pop();
    },
    updateAngle: (state, action) => {
      state.angle = action.payload;
    },
    pickColor: (state, action) => {
      state.pickedColorID = action.payload;
    },
    updateColorPosition: (state, action) => {
      const pickedColor = state.colors.find(color => color.id === state.pickedColorID);
      pickedColor.position = action.payload;
    },
  }
})

export const { updateColorValue, addColor, removeColor, updateAngle, pickColor, updateColorPosition } = gradientSlice.actions;

export default gradientSlice.reducer;
