import { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fillDurationVariables, updateProgress } from "../features/progressSlice"

export default function AudioPlayer() {

  const playlist = useSelector(state => state.playlist);
  const dispatch = useDispatch();
  const audioRef = useRef();
  // console.log(audioRef.current);

  useEffect(() => {
    if (playlist.songs && playlist.play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playlist])

  const handleLoadedData = (e) => {
    if (playlist.songs) {
      dispatch(fillDurationVariables({
        currentTime: e.target.currentTime,
        totalDuration: e.target.duration,
      }));
    }
  }

  const handleTimeUpdate = (e) => {
    dispatch(updateProgress(e.target.currentTime));
  }


  return (
    <audio
    id="audio-player"
    ref={audioRef}
    src={playlist.songs?.find(song => song.id === playlist.currentTrackID).url}
    onLoadedData={handleLoadedData}
    onTimeUpdate={handleTimeUpdate}>
    </audio>
  )
}
