import { useDispatch, useSelector } from "react-redux";
import { toggleLecture } from "../../features/playlistSlice";
import Player from '../Player'
import play from "../../assets/play-icon.svg"
import pause from "../../assets/pause-icon.svg"

export default function PlayPauseBtn() {

  const playlist = useSelector(state => state.playlist);
  const dispatch = useDispatch();

  return (
    <button
    className="flex justify-center items-center w-12 h-12 shadow-md rounded-full bg-slate-100 hover:bg-slate-50"
    onClick={() => dispatch(toggleLecture())}>
      <img src={playlist.play ? pause : play} alt="toggle button" />
    </button>
  )
}
