import useAPICall from "../hooks/useAPICall";
import spinner from "../assets/spinner.svg"

export default function ImageGallery() {
  return (
    <form>
      <label htmlFor="search">Look for images...</label>
      <input
      className="mt-2 w-full py-3 px-2 text-slate-800 border border-slate-400 rounded outline-slate-400"
      type="text"
      placeholder="Look for something..."
      id="search"/>
      <ul className="flex flex-wrap mt-6">
      </ul>
    </form>
  )
}
