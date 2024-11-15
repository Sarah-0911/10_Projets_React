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
    prevSong: (state) => {
      const currentIndex = state.songs.findIndex(song => song.id === state.currentTrackID)
      if (currentIndex === 0) {
        state.currentTrackID = state.songs[state.songs.length - 1].id
      } else {
        state.currentTrackID = state.songs[currentIndex - 1].id;
      }
    },
    nextSong: (state) => {
      const currentIndex = state.songs.findIndex(song => song.id === state.currentTrackID);
      if (currentIndex === state.songs.length - 1) {
        state.currentTrackID = state.songs[0].id;
      } else {
        state.currentTrackID = state.songs[currentIndex + 1].id;
      }
    },
    selectSong: (state, action) => {
      state.currentTrackID = action.payload;
    }
  }
})

export const { addBaseSongs, toggleLecture, prevSong, nextSong, selectSong } = playlistSlice.actions;

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
