import { useSelector } from "react-redux";
import formatedTime from "../../utils/formatedTime";

export default function ProgressBar() {

  const progressData = useSelector(state => state.progress);
  console.log(progressData.totalDuration);

  const playlist = useSelector(state => state.playlist);
  const currentTrack = playlist.songs?.find(song => song.id === playlist.currentTrackID);


  return (
    <div className="my-4">
      <div className="bg-slate-900 h-1 rounded cursor-pointer">
        <div className="bg-indigo-400 scale-x-50 rounded origin-left h-full pointer-events-none"></div>
        <div className="flex justify-between text-sm">
          <p>{formatedTime(progressData.current)}</p>
          <p>{formatedTime(progressData.totalDuration)}</p>
        </div>
      </div>
    </div>
  )
}
