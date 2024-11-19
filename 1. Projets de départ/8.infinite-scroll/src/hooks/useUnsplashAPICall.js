import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const accessKey = import.meta.env.VITE_UNSPLASH_KEY;

const useUnsplashAPICall = (querySearch, pageNumber) => {

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [maxPages, setMaxPages] = useState(0);

  useEffect(() => {
    setLoading(true);
    const fetchData = async() => {
      try {
        const response = await fetch(`https://api.unsplash.com/photos?page=${pageNumber}&per_page=30&query=${querySearch}&client_id=${accessKey}`);
        if (!response.ok) throw new Error(`Error ${response.status}`);
        const data = await response.json();
        setPhotos(data);
        setLoading(false);

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
