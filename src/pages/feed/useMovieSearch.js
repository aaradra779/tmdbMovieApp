import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { client } from '../../helpers';
import { tmbdApiConfig } from '../../config';

function useMovieSeaarch() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const [moviesList, setMovieList] = useState({ results: [] });
  const [tvList, setTvList] = useState({ results: [] });
  const [personList, setPersonList] = useState({
    results: [],
  });

  const fetchApi = async () => {
    setIsLoading(true);
    const res = await client.get(
      `search/movie?query=${searchParams.get('q')}`,

      {
        headers: {
          Authorization: `Bearer ${tmbdApiConfig.API_READ_ACCESS_TOKEN}`,
        },
      }
    );
    setMovieList(res.data);
    // setIsMovieActive(moviesList);

    const tvResponse = await client.get(
      `search/tv?query=${searchParams.get('q')}`,
      {
        headers: {
          Authorization: `Bearer ${tmbdApiConfig.API_READ_ACCESS_TOKEN}`,
        },
      }
    );
    setTvList(tvResponse.data);

    const personResponse = await client.get(
      `search/person?query=${searchParams.get('q')}`,
      {
        headers: {
          Authorization: `Bearer ${tmbdApiConfig.API_READ_ACCESS_TOKEN}`,
        },
      }
    );
    setPersonList(personResponse.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, [searchParams]);

  return { isLoading, moviesList, tvList, personList };
}
export default useMovieSeaarch;
