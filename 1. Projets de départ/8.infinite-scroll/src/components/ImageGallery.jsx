import { useState, useEffect, useRef } from "react";
import useUnsplashAPICall from "../hooks/useUnsplashAPICall";
import spinner from "../assets/spinner.svg";
import { nanoid } from "nanoid";

export default function ImageGallery() {

  const [query, setQuery] = useState("random");
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMoreImages, setHasMoreImages] = useState(true);

  const { photos, loading, error, maxPages } = useUnsplashAPICall(query, pageNumber);

  const newGalleryRef = useRef();
  const searchRef = useRef();

  useEffect(() => {
    if (newGalleryRef.current) {
      const observer = new IntersectionObserver(entries => {
        // console.log(entries);
        if (entries[0].isIntersecting && pageNumber < maxPages) {
          setPageNumber(prevPageNumber => prevPageNumber + 1);
        } else if (pageNumber === maxPages) {
          setHasMoreImages(false);
        }
      })
      observer.observe(newGalleryRef.current);

      return () => {
        observer.disconnect();
      }
    }
  }, [pageNumber, maxPages])

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchRef.current.value);
    setPageNumber(1);
  }

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
    content = <p className="text-center">{error.msg}</p>
  } else if (!photos.length && !error && !loading) {
    content = <p className="text-center">No image available for this query...</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Look for images...</label>
      <input
      ref={searchRef}
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
        {!hasMoreImages && <p className="mb-4 text-center">No more images to show for that query.</p>}
      </div>
    </form>
  )
}
