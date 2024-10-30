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
      if (state.session.runningValue > 0) {
        state.session.runningValue --;
        state.displayedValue.value = state.session.runningValue;
        state.displayedValue.heading = "Work";
      } else if (state.pause.runningValue > 0) {
        state.pause.runningValue --;
        state.displayedValue.value = state.pause.runningValue;
        state.displayedValue.heading = "Pause";
      } else {
        state.cycles ++;
        state.session.runningValue = state.session.value - 1;
        state.displayedValue.value = state.session.value - 1;
        state.displayedValue.heading = "Work";
        state.pause.runningValue = state.pause.value;
      }
    },
    resetChrono: (state) => {
      if (state.intervalID) clearInterval(state.intervalID);
      state.intervalID = undefined;
      state.isPlaying = false;
      state.session.runningValue = state.session.value;
      state.pause.runningValue = state.pause.value;
      state.displayedValue.value = state.session.runningValue;
      state.displayedValue.heading = "Work";
      state.cycles = 0;
    },
    setIntervalID: (state, action) => {
      state.isPlaying = true;
      state.intervalID = action.payload;
    }
  }
})

export const startChrono = (action) => (dispatch, getState) => {

  if (getState().chrono.intervalID) return;

  dispatch(tick())
  const intervalID = setInterval(() => {
    dispatch(tick())
  }, 1000)

  dispatch(setIntervalID(intervalID))
}

export const { updateChronoValues, tick, resetChrono, setIntervalID } = chronoSlice.actions;
export default chronoSlice.reducer;

// Ici, startChrono est un créateur d'action qui retourne une fonction (thunk)
// au lieu d'un objet d'action classique. Cette fonction peut déclencher plusieurs
// dispatchs et accéder à getState grâce au middleware redux-thunk.
