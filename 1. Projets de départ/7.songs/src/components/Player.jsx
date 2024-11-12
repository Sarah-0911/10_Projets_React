import { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

export default function Player() {

  const playlist = useSelector(state => state.playlist);

  const dispatch = useDispatch();
  const audioRef = useRef();


  // useEffect(() => {
  //   dispatch()
  // })

  return (
    <audio
    id="audio-player"
    ref={audioRef}
    src={playlist.songs?.find(song => song.id === playlist.currentTrackID).url}>

    </audio>
  )
}
