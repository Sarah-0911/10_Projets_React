import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: {
    value: 1500,
    runningValue: 1500
  },

  pause: {
    value: 300,
    runningValue: 300
  },

  isPlaying: false,
  intervalID: undefined,
  cycles: 0,
  displayedValue: {
    value: 1500,
    heading: "Work"
  }
}

export const chronoSlice = createSlice({
  name: "chrono",
  initialState,
  reducers: {
    updateChronoValues: (state, action) => {
      const chosenState = state[action.payload.type];

      if (chosenState.value + action.payload.value === 0) return;

      if (action.payload.type === "session") {
        if (!state.isPlaying) {
          chosenState.value += action.payload.value;
          chosenState.runningValue += action.payload.value;
          state.displayedValue.value = chosenState.runningValue;
        }
        else {
          chosenState.value += action.payload.value;
        }
      }
      else if (action.payload.type === "pause") {
        chosenState.value += action.payload.value;
      }
    },
    tick: (state) => {
      state.displayedValue.value --;
      state.isPlaying = true;
    },
    resetChrono: (state) => {
      state.displayedValue.value = 1500;
      if (state.intervalID) clearInterval(state.intervalID);
      state.intervalID = undefined;
      state.isPlaying = false;
    },
    setIntervalID: (state, action) => {
      state.intervalID = action.payload;
    }
  }
})

export const startChrono = () => (dispatch, getState) => {
  console.log(getState());

  if (getState().chrono.intervalID) return;

  dispatch(tick())
  const intervalID = setInterval(() => {
    dispatch(tick())
  }, 1000)

  dispatch(setIntervalID(intervalID))
}

export const { updateChronoValues, tick, resetChrono, setIntervalID } = chronoSlice.actions;
export default chronoSlice.reducer;
