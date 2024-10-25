import { useDispatch } from "react-redux";
import { hidePreview } from "../features/previewSlice";

export default function ({ toggleTab, id, imgURL, buttonContent }) {

  const dispatch = useDispatch();

  const handleTab = () => {
    toggleTab(id);
    dispatch(hidePreview())
  }

  return (
    <button
    key={id}
    className="flex items-center gap-2 py-3 px-5 hover:bg-slate-600 focus:bg-slate-600 outline-none"
    onClick={handleTab}>
      <img className="w-5" src={imgURL} alt="lang icon" />
      <span className="text-slate-50 ml-3">{buttonContent}</span>
    </button>
  )
}
