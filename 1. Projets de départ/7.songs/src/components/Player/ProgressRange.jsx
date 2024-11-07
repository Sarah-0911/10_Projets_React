export default function ProgressRange() {
  return (
    <>
      <input
      className="w-full h-1 bg-slate-900 cursor-pointer border-none outline-none"
      type="range"/>
      <div className="flex justify-between text-sm">
        <p>0:00</p>
        <p>4:05</p>
      </div>
    </>
  )
}
