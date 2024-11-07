import PlayerPanel from "./components/Player/PlayerPanel";
import Playlist from "./components/Playlist";

function App() {

  return (
  <>
    <div className="bg-slate-800 pt-20 px-4 min-h-screen">

      <div className="max-w-xl mx-auto">
        {/* Player */}
        <h1 className="text-slate-100 text-xl mb-4">PlayerMania - Your songs.</h1>

        {/* Playlist */}
        <Playlist />
      </div>

      <div>
        <PlayerPanel />
      </div>

    </div>
  </>
  )
}

export default App
