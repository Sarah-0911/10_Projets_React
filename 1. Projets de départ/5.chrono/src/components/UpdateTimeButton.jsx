export default function UpdateTimeButton({ sign, type }) {
  return (
    <button className="flex justify-center items-center bg-slate-200 hover:bg-slate-200
    text-slate-700 w-8 h-8 rounded text-3xl">
      <span className="relative bottom-1 pointer-events-none">{sign}</span>
    </button>
  )
}
