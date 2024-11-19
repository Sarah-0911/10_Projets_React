import { useState } from "react";
import useUnsplashAPICall from "../hooks/useUnsplashAPICall";
import spinner from "../assets/spinner.svg"

export default function ImageGallery() {

  const [query, setQuery] = useState("random");
  const [pageNumber, setPageNumber] = useState(1);

  const { photos, loading, error, maxPages } = useUnsplashAPICall(query, pageNumber);
  console.log(photos);


  return (
    <form>
      <label htmlFor="search">Look for images...</label>
      <input
      className="mt-2 w-full py-3 px-2 text-slate-800 border border-slate-400 rounded outline-slate-400"
      type="text"
      placeholder="Look for something..."
      id="search"/>
      <div className="flex flex-wrap mt-6">
      </div>
    </form>
  )
}
