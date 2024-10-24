import CodeTab from "./CodeTab";
import { useSelector } from "react-redux";

export default function Tabs() {

  const tabs = useSelector(state =>  state.tabs);
  // console.log(tabs);

  return (
    <div className="flex grow">
      <div className="flex flex-col shrink-0 w-[175px] text-slate-50 border-r border-slate-200">
        <button>HTML</button>
        <button>CSS</button>
        <button>JS</button>
      </div>
      <div className="grow relative">
        <CodeTab tabs={tabs} />
      </div>
    </div>
  )
}
