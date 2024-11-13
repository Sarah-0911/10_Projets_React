import { useSelector } from "react-redux"
import ChangeTrackBtn from "./ChangeTrackBtn"
import PlayPauseBtn from "./PlayPauseBtn"
import ProgressBar from "./ProgressBar"

export default function PlayerPanel() {

  const playlist = useSelector(state => state.playlist);
  const currentTrack = playlist.songs?.find(song => song.id === playlist.currentTrackID);

  return (
    <div className="fixed bottom-0 w-full rounded bg-slate-300 border-t-2 border-gray-800">
      <div className="max-w-[800px] text-slate-800 mx-auto p-4">

      <div className="flex justify-between items-end">
        <div>
          <p className="font-semibold">{playlist.songs && currentTrack.title}</p>
          <p className="text-sm">{playlist.songs && currentTrack.artist}</p>
        </div>
        <p className="text-sm">{playlist.songs?.findIndex(song => song.id === playlist.currentTrackID) + 1} / {playlist.songs?.length}</p>
      </div>

      <div className="flex justify-center items-center gap-3">
        <ChangeTrackBtn direction="prev" />
        <PlayPauseBtn />
        <ChangeTrackBtn direction="next" />
      </div>
      <ProgressBar />
      </div>
    </div>
  )
}
