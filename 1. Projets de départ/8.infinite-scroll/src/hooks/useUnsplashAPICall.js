import { useState, useEffect } from "react";

const accessKey = import.meta.env.VITE_UNSPLASH_KEY;

const useUnsplashAPICall = (querySearch, pageNumber) => {

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [maxPages, setMaxPages] = useState(0);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=${pageNumber}&per_page=30&query=${querySearch}&client_id=${accessKey}`);
        if (!response.ok) throw new Error(`Error ${response.status}`);
        const data = await response.json();
        setPhotos(prevPhotos => [...prevPhotos, ...data.results]);
        setLoading(false);
        setMaxPages(data.total_pages)

      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }

    fetchData()

  }, [querySearch, pageNumber])

  return {photos, loading, error, maxPages};
}

export default useUnsplashAPICall;
