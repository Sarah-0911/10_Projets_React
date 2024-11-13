import prev from "../../assets/prev-icon.svg"
import next from "../../assets/next-icon.svg"

export default function ChangeTrackBtn({ direction }) {

  return (
    <button
    className="flex justify-center items-center w-8 h-8 bg-slate-400 rounded-full hover:bg-slate-500">
      <img className="w-[60%]" src={direction === "prev" ? prev : next} alt="prev icon" />
    </button>
  )
}
