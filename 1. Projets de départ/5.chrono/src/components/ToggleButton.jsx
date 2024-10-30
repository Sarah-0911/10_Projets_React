import reset from "../assets/reset.svg"
import play from "../assets/play-button.svg"
import { useDispatch, useSelector } from "react-redux"
import { startChrono, resetChrono } from "../features/chronoSlice.js"

export default function ToggleButton() {

  const chronoValues = useSelector(state => state.chrono);
  const dispatch = useDispatch();

  const toggleChrono = () => {
    if (!chronoValues.isPlaying) {
      dispatch(startChrono())
    } else {
      dispatch(resetChrono())
    }
  }

  return (
    <button
    onClick={toggleChrono}
    className="flex justify-center items-center gap-3 mx-auto p-2 w-28 border
    bg-slate-300 hover:bg-slate-200 text-slate-900 rounded">
      <span>{chronoValues.isPlaying ? "Reset" : "Start"}</span>
      <img
      className="w-4"
      src={chronoValues.isPlaying ? reset : play}
      alt="" />
    </button>
  )
}
