import prev from "../../assets/prev-icon.svg"
import next from "../../assets/next-icon.svg"
import { useSelector, useDispatch } from "react-redux"
import { prevSong, nextSong } from "../../features/playlistSlice"

export default function ChangeTrackBtn({ direction }) {

  const playlist = useSelector(state => state.playlist);
  const currentTrack = playlist.songs?.find(song => song.id === playlist.currentTrackID);

  const dispatch = useDispatch();

  const changeTrack = () => {
    if(playlist.songs) {
      if (direction === "prev") {
        dispatch(prevSong(currentTrack));
      } else if (direction === "next") {
        dispatch(nextSong());
      }
    }
  }

  return (
    <button
    className="flex justify-center items-center w-8 h-8 bg-slate-400 rounded-full hover:bg-slate-500"
    onClick={changeTrack}>
      <img className="w-[60%]" src={direction === "prev" ? prev : next} alt="prev icon" />
    </button>
  )
}
