import { useDispatch } from "react-redux";
import { updateCode } from "../features/tabsSlice.js";

export default function CodeTab({ id, code }) {

  const dispatch = useDispatch()

  const handleTextarea = (e) => {
    dispatch(updateCode({
      id,
      value: e.target.value
    }))
  }



  return (
    <textarea
    spellCheck="false"
    className="bg-zinc-900 text-slate-200 p-8 block h-full w-full focus:outline-none resize-none"
    value={code}
    onChange={handleTextarea}
    >
    </textarea>
  )
}
