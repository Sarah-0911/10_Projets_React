import Player from "./components/Player/Player";
import SongItem from "./components/TrackItem";

function App() {

  return (
  <>
    <div className="bg-slate-700 pt-20 min-h-screen">

      <div className="max-w-xl mx-auto">
        <h1 className="text-slate-100 font-semibold text-xl mb-4">PlayerMania - Your Songs.</h1>
        <ul>
        <SongItem />
        </ul>
      </div>

      <div>
        <Player />
      </div>

    </div>
  </>
  )
}

export default App
