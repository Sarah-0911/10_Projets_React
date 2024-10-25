import Tabs from "./components/Tabs";

function App() {

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col">
      <div className="px-4 py-4 border-b flex justify-between items-center">
        <h1 className="text-2xl w-full text-slate-50">
          <span className="text-base">the</span>SmartIDE
        </h1>
        <div className="w-full">
          <button className="">Hide Preview</button>
        </div>
        <div className="w-full flex">
          <div className="ml-auto mr-2">
            <div className="w-[6px] h-[6px] rounded-full bg-slate-200 my-1"></div>
            <div className="w-[6px] h-[6px] rounded-full bg-slate-200 my-1"></div>
            <div className="w-[6px] h-[6px] rounded-full bg-slate-200"></div>
          </div>
        </div>
      </div>
        <Tabs />
    </div>
  )
}

export default App
