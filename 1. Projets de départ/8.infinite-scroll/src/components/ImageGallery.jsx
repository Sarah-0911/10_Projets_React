import { useState, useEffect, useRef } from "react";
import useUnsplashAPICall from "../hooks/useUnsplashAPICall";
import spinner from "../assets/spinner.svg";
import { nanoid } from "nanoid";

export default function ImageGallery() {

  const [query, setQuery] = useState("random");
  const [pageNumber, setPageNumber] = useState(1);

  const { photos, loading, error, maxPages } = useUnsplashAPICall(query, pageNumber);

  const newGalleryRef = useRef();

  useEffect(() => {

    if (newGalleryRef.current) {
      const observer = new IntersectionObserver(entries => {
        // console.log(entries);
        if (entries[0].isIntersecting && pageNumber < maxPages) {
          setPageNumber(prevPageNumber => prevPageNumber + 1);
        }
      })
      observer.observe(newGalleryRef.current);

      return () => {
        observer.disconnect();
      }
    }

  }, [pageNumber, maxPages])

  let content;
  if (loading && !error) {
    content = <img className="mx-auto" src={spinner} alt="loading spinner" />
  } else if (photos.length) {
    content =
      <div className="grid sm:grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-4 justify-center">
        {photos.map(photo => (
        <img
        className="w-full h-full object-cover"
        key={nanoid(8)}
        src={photo.urls.regular}
        alt={photo.alt_description} />
      ))}
      </div>
  } else if (error) {
    content = <p className="text-center">An error is occurred...</p>
  } else if (!photos.length) {
    content = <p className="text-center">No photos found...</p>
  }

  return (
    <form>
      <label htmlFor="search">Look for images...</label>
      <input
      className="mt-2 mb-10 w-full py-3 px-2 text-slate-800 border border-slate-400 rounded outline-slate-400"
      type="text"
      placeholder="Look for something..."
      id="search"/>
      <div>
        {content}
      </div>
      <div
      className="pt-4"
      ref={newGalleryRef}>
      </div>
    </form>
  )
}
