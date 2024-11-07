import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songs: undefined,
    play: false,
    currentTrackID: undefined
  }


export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {

  }
})

export default playlistSlice.reducer;

export const getMusicsData = (action) => async(dispatch, getState) => {
  try {

    const response = await fetch("data/playlist.json");
    if(!response.ok) throw new Error();

    const musicsData = await response.json();
    console.log(musicsData);

  } catch (error) {
    console.log(error);

  }

}
