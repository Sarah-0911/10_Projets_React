import prev from "../../assets/prev-icon.svg"
import next from "../../assets/next-icon.svg"

export default function ChangeTrackBtn() {

  return (
    <button
    className="flex justify-center items-center w-[30px] h-[30px] bg-slate-400 rounded-full hover:bg-slate-500">
      <img className="w-[60%]" src={prev} alt="prev icon" />
    </button>
  )
}
