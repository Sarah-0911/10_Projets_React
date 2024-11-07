export default function TrackItem() {

  const startTrack = () => {
    console.log('go!');
  }

  return (
    <li
    className="bg-slate-50 p-2 rounded mb-2 hover:bg-slate-300 cursor-pointer"
    onClick={startTrack}
    >
      <span className="text-slate-950">Titre - Artiste</span>
    </li>
  )
}
