import { useState } from "react";
import useUnsplashAPICall from "../hooks/useUnsplashAPICall";
import spinner from "../assets/spinner.svg";

export default function ImageGallery() {

  const [query, setQuery] = useState("random");
  const [pageNumber, setPageNumber] = useState(1);

  const { photos, loading, error, maxPages } = useUnsplashAPICall(query, pageNumber);
  console.log(photos);

  let content;
  if (loading && !error) {
    content = <img className="mx-auto" src={spinner} alt="loading spinner" />
  } else if (photos.length) {
    content =
      <div className="grid sm:grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-4 justify-center">
        {photos.map(photo => (
        <img
        className="w-full h-full object-cover"
        key={photo.id}
        src={photo.urls.regular}
        alt={photo.alt_description} />
      ))}
      </div>

  } else if (error) {
    content = <p>Une erreur est survenue...</p>
  }

  return (
    <form>
      <label htmlFor="search">Look for images...</label>
      <input
      className="mt-2 w-full py-3 px-2 text-slate-800 border border-slate-400 rounded outline-slate-400"
      type="text"
      placeholder="Look for something..."
      id="search"/>
      <div className="my-10">
        {content}
      </div>
    </form>
  )
}
