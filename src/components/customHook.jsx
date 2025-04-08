import { useState, useEffect } from 'react';

const customHook = (url) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    };

    fetchMovies();
  }, [url]);

  return { movies, loading };
};

export default customHook;
