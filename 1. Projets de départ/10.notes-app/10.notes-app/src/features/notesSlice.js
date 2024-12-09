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

    },
    deleteNote: (state, action) => {

    },
    editNote: (state, action) => {

    }
  }
})

export default notesSlice.reducer;
export const { setNotesBase, addNote, deleteNote, editNote } = notesSlice.actions;

export const getNotesData = (action) => async(dispatch, getState) => {
    const response = await fetch("/data/notes.json");
    const data = await response.json();
    dispatch(setNotesBase(data.notes));
}
