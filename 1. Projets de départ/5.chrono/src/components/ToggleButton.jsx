import { useState } from "react"
import reset from "../assets/reset.svg"
import play from "../assets/play-button.svg"

export default function ToggleButton() {

  return (
    <button
    className="flex justify-center items-center gap-3 mx-auto p-2 w-28 border
    bg-slate-300 hover:bg-slate-200 text-slate-900 rounded">
      <span>Start</span>
      <img
      className="w-4"
      src={play}
      alt="" />
    </button>

  )
}
