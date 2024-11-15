import { useSelector, useDispatch } from "react-redux";
import { getMusicsData, selectSong } from "../features/playlistSlice";
import { useEffect } from "react";

export default function Playlist() {

  const playlist = useSelector(state => state.playlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMusicsData())
  }, [])

  return (
    <ul className="mt-4 pb-[300px]">
      {playlist?.songs?.length && playlist.songs.map(song => (
        <li
        key={song.id}
        className="bg-indigo-100 p-2 font-semibold rounded text-slate-800 mb-2 hover:bg-indigo-200 cursor-pointer"
        onClick={() => dispatch(selectSong(song.id))}>
          <span>{song.title} - </span>
          <span>{song.artist}</span>
        </li>
      ))}
    </ul>
  )
}
