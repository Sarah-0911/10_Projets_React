import { useSelector } from "react-redux";
import { useState } from "react";
import CodeTab from "./CodeTab";
import ButtonTab from "./ButtonTab";
import Preview from "./Preview.jsx";

export default function Tabs() {

  const tabs = useSelector(state =>  state.tabs);
  const [tabIndex, setTabIndex] = useState(tabs[0].id);

  const previewData = useSelector(state =>  state.preview);

  return (
    <div className="flex grow">
      <div className="flex flex-col shrink-0 w-[175px] text-slate-50 border-r border-slate-200">
        {tabs.map(tab => (
          <ButtonTab
          key={tab.id}
          id={tab.id}
          imgURL={tab.imgURL}
          buttonContent={tab.buttonContent}
          toggleTab={(id) => setTabIndex(id)} />
        ))}
      </div>
      <div className="grow relative">
        <CodeTab id={tabIndex} code={tabs.find(tab => tab.id === tabIndex).code} />
        {previewData.preview && <Preview />}
      </div>
    </div>
  )
}
