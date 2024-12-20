import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: undefined
}

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotesBase: (state, action) => {
      state.list = action.payload;
    },
    addNote: (state, action) => {
      state.list.push(action.payload);
    },
    editNote: (state, action) => {
      let noteIndex = state.list.findIndex(note => note.id === action.payload.id);
      if (noteIndex !== -1) state.list[noteIndex] = action.payload;
    },
    deleteNote: (state, action) => {
      state.list = state.list.filter(note => note.id !== action.payload);
    },
  }
})

export default notesSlice.reducer;
export const { setNotesBase, addNote, editNote, deleteNote } = notesSlice.actions;

export const getNotesData = (action) => async(dispatch, getState) => {
    const response = await fetch("/data/notes.json");
    const data = await response.json();
    dispatch(setNotesBase(data.notes));
}
