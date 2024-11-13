import Player from "./components/Player";
import PlayerPanel from "./components/PlayerPanel/PlayerPanel";
import Playlist from "./components/Playlist";

function App() {

  return (
  <>
    <div className="bg-slate-800 pt-20 min-h-screen">
      <div className="max-w-xl mx-auto">
        <Player />
        <h1 className="text-slate-100 text-xl mb-4">PlayerMania - Your songs.</h1>
        {/* Playlist */}
        <Playlist />
      </div>
        <PlayerPanel />
    </div>
  </>
  )
}

export default App
