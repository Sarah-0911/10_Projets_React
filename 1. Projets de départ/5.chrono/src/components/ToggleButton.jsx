import reset from "../assets/reset.svg"
import play from "../assets/play-button.svg"
import { useDispatch, useSelector } from "react-redux"
import { startChrono, resetChrono, setIntervalID } from "../features/chronoSlice.js"

export default function ToggleButton() {

  const chrono = useSelector(state => state.chrono);

  const dispatch = useDispatch();

  const toggleTick = () => {
    // if (chrono.isPlaying) return;

    if (chrono.intervalID === undefined) {
      dispatch(startChrono())
    } else {
      dispatch(resetChrono())
    }
  }

  return (
    <button
    onClick={toggleTick}
    className="flex justify-center items-center gap-3 mx-auto p-2 w-28 border
    bg-slate-300 hover:bg-slate-200 text-slate-900 rounded">
      <span>{chrono.isPlaying ? "Reset" : "Start"}</span>
      <img
      className="w-4"
      src={chrono.isPlaying ? reset : play}
      alt="" />
    </button>
  )
}
