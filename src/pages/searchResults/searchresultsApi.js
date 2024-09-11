import { tmbdApiConfig } from '../../config';
import { client } from '../../helpers';

export const getSearchedResults = async ({ queryKey }) => {
  const [_key, { interval }] = queryKey;
  // console.log(interval);

  const request = await client.get('search/' + interval, {
    headers: {
      Authorization: `Bearer ${tmbdApiConfig.API_READ_ACCESS_TOKEN}`,
    },
  });

  console.log(request);

  return request.data;
};
