import { useSelector } from "react-redux";

export default function CodeTab({ tabs }) {

  console.log(tabs);


  return (
    <textarea
    spellCheck="false"
    className="bg-zinc-900 text-slate-200 p-8 block h-full w-full focus:outline-none resize-none">

    </textarea>
  )
}
