import TrackInfos from "./TrackInfos";

export default function Player() {
  return (
    <div className="fixed bottom-0 w-full bg-slate-300">

      <div className="max-w-[600px] text-slate-800 mx-auto p-4">
      <TrackInfos />
      </div>
    </div>
  )
}
