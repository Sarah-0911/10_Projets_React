import UpdateTimeButton from "./components/UpdateTimeButton"
import ToggleButton from "./components/ToggleButton"
import { useSelector } from "react-redux"
import getFormatedTime from "./utils/getFormatedTime.js";

function App() {

  const chronoValues = useSelector(state => state.chrono);

  return (
    <div className="bg-slate-700 text-slate-100 min-h-screen pt-20">
      <div className="border border-slate-500 max-w-xl p-10 mx-auto rounded">
        <h1 className="text-center text-3xl mb-8">Pomodoro App</h1>

        <div className="flex justify-center mb-8 gap-10">
          <div>
            <p className="text-center mb-1">Sessions</p>
            <div className="flex justify-center gap-3">
              <UpdateTimeButton sign="-" type="session" />
              <span>{chronoValues.session.value / 60}</span>
              <UpdateTimeButton sign="+" type="session" />
            </div>
          </div>
          <div>
            <p className="text-center mb-1">Pauses</p>
            <div className="flex justify-center gap-3">
              <UpdateTimeButton sign="-" type="pause" />
              <span>{chronoValues.pause.value / 60}</span>
              <UpdateTimeButton sign="+" type="pause" />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-center font-semibold text-lg mb-1">{chronoValues.displayedValue.heading}</p>
          <p className="flex justify-center">
          <span className=" text-center py-2 px-4 mb-1 text-slate-900 bg-slate-300 rounded text-xl">
            {getFormatedTime(chronoValues.displayedValue.value)}
          </span>
          </p>
          <p className=" mb-10 text-center">Passed cycle(s): {chronoValues.cycles}</p>
        </div>

        <ToggleButton />

      </div>
    </div>
  )
}

export default App
