import play from "../../assets/play-icon.svg"
import pause from "../../assets/pause-icon.svg"

export default function PlayPauseBtn() {

  return (
    <button className="flex justify-center items-center w-[42px] h-[42px] bg-slate-100 rounded-full">
      <img src={play} alt="prev icon" />
    </button>
  )
}
