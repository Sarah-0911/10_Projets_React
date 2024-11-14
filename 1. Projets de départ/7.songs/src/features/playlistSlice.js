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
    addBaseSongs: (state, action) => {
      state.songs = action.payload;
      state.currentTrackID = action.payload[0].id;
    },
    toggleLecture: (state) => {
      state.play = !state.play;
    },
    prevSong: (state, action) => {
      console.log("prev");
      // state.currentTrackID = action.payload - 1
    },
    nextSong: (state, action) => {
      console.log("next");
      // state.currentTrackID = ""
    }
  }
})

export const { addBaseSongs, toggleLecture, prevSong, nextSong } = playlistSlice.actions;

export default playlistSlice.reducer;

export const getMusicsData = (action) => async(dispatch, getState) => {
  try {
    const response = await fetch("data/playlist.json");
    if(!response.ok) throw new Error();

    const musicsData = await response.json();
    dispatch(addBaseSongs(musicsData.playlist))
    // console.log(getState().playlist);

  } catch (error) {
    console.log(error);

  }

}
