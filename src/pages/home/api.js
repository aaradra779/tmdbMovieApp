import { client } from '../../helpers';
import { tmbdApiConfig } from '../../config';

export const getTrendingMovies = async ({ queryKey }) => {
  const [_key, { interval }] = queryKey;

  const request = await client.get('trending/movie/' + interval, {
    headers: {
      Authorization: `Bearer ${tmbdApiConfig.API_READ_ACCESS_TOKEN}`,
    },
  });
  // console.log(request);
  return request.data;
};

export const getPopularMovies = async () => {
  const request = await client.get('movie/popular', {
    headers: {
      Authorization: `Bearer ${tmbdApiConfig.API_READ_ACCESS_TOKEN}`,
    },
  });

  return request.data;
};

const getSessionId = localStorage.getItem('session_id');

// const getSessionId = () => {
//   if (localStorage.getItem('session_id')) {
//     return localStorage.getItem('session_id');
//   } else {
//     return false;
//   }
// };

export const getAccountDetails = async () => {
  const session_id = getSessionId;

  if (session_id) {
    const response = await client.get(`account?session_id=${session_id}`);
    return response.data;
  } else {
    return false;
  }
};
