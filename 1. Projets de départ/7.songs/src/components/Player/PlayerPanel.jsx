import ChangeTrackBtn from "./ChangeTrackBtn"
import PlayPauseBtn from "./PlayPauseBtn"
import ProgressRange from "./ProgressRange"
import TrackInfos from "./TrackInfos"

// import { useSelector } from "react-redux"

export default function PlayerPanel() {

  // const playlist = useSelector(state => state.playlist)
  // console.log(playlist);

  return (
    <div className="fixed bottom-0 w-full bg-slate-300">
      <div className="max-w-[600px] text-slate-800 mx-auto p-4">
      <TrackInfos />
      <div className="flex justify-center items-center gap-3">
        <ChangeTrackBtn />
        <PlayPauseBtn />
        <ChangeTrackBtn />
      </div>
      <ProgressRange />
      </div>
    </div>
  )
}
