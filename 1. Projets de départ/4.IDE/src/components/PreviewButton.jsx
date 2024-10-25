import { useDispatch, useSelector } from "react-redux";
import { togglePreview } from "../features/previewSlice";
import hide from "../assets/hide.svg";
import view from "../assets/view.svg";

export default function PreviewButton() {

  const previewData = useSelector(state => state.preview);
  const dispatch = useDispatch();

  return (
    <button
    onClick={() => dispatch(togglePreview())}
    className=" bg-blue-700 flex py-2 px-4 rounded gap-2 items-center text-slate-50 mx-auto">
      <img src={previewData.preview ? hide : view} alt="icon" className="w-4 h-4" />
      <span>{previewData.preview ? "Hide " : "Show "}Preview</span>
    </button>
  )
}
