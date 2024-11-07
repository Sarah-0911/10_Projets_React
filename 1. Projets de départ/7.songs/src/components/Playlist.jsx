import { useDispatch } from "react-redux";
import { getMusicsData } from "../features/playlistSlice";


export default function Playlist() {

  const dispatch = useDispatch();

  const startTrack = () => {
    dispatch(getMusicsData())
  }



  return (
    <ul>
      <li
      className="bg-slate-50 p-2 rounded mb-2 hover:bg-slate-300 cursor-pointer"
      onClick={startTrack}>
        <span className="text-slate-950">Titre - Artiste</span>
      </li>
    </ul>
  )
}
