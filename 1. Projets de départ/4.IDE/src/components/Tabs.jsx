import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import CodeTab from "./CodeTab";

export default function Tabs() {
  return (
    <div className="flex grow">
      <div className="flex flex-col shrink-0 w-[175px] text-slate-50 border-r border-slate-200">
        <button>HTML</button>
        <button>CSS</button>
        <button>JS</button>
      </div>
      <div className="grow relative">
        <CodeTab />
      </div>
    </div>
  )
}
