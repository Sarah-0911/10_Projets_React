import UpdateTimeButton from "./components/UpdateTimeButton"
import Work from "./components/Work"
import ToggleButton from "./components/ToggleButton"

function App() {

  return (
    <div className="bg-slate-700 text-slate-100 min-h-screen pt-20">
      <div className="border border-slate-500 max-w-xl p-10 mx-auto rounded">
        <h1 className="text-center text-3xl mb-8">Pomodoro App</h1>
        <div className="flex justify-center mb-8 gap-10">
          <div>
            <p className="text-center mb-1">Sessions</p>
            <div className="flex justify-center gap-3">
              <UpdateTimeButton sign="-" type="session" />
              <span>25</span>
              <UpdateTimeButton sign="+" type="session" />
            </div>
          </div>
          <div>
            <p className="text-center mb-1">Pauses</p>
            <div className="flex justify-center gap-3">
              <UpdateTimeButton sign="-" type="pause" />
              <span>5</span>
              <UpdateTimeButton sign="+" type="pause" />
            </div>
          </div>

        </div>
          <Work />
          <ToggleButton />
      </div>
    </div>
  )
}

export default App
