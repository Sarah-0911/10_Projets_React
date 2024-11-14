import { useSelector } from "react-redux";
import { useRef } from "react";
import formatedTime from "../../utils/formatedTime";

export default function ProgressBar() {

  const progressData = useSelector(state => state.progress);
  const progressRef = useRef();

  const handleProgressClick = (e) => {
    const audioPlayer = document.getElementById("audio-player");
    const rect = progressRef.current.getBoundingClientRect().width;
    const progressClick = e.nativeEvent.offsetX / rect;
    const newClick = progressClick * progressData.totalDuration;

    audioPlayer.currentTime = newClick;
  }


  return (
    <div className="mt-4">
      <div
      ref={progressRef}
      className="bg-slate-900 h-1 rounded cursor-pointer overflow-hidden"
      onClick={handleProgressClick}>
        <div
        className="bg-indigo-400 rounded origin-left h-full pointer-events-none"
        style={{transform: `scaleX(${progressData.current / progressData.totalDuration})`}}>
        </div>
      </div>
        <div className="flex justify-between text-sm">
          <p>{formatedTime(progressData.current)}</p>
          <p>{formatedTime(progressData.totalDuration)}</p>
        </div>
    </div>
  )
}
