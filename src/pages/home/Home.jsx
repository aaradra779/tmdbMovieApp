import React, { act, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import SearchInput from '../../components/SearchInput';
import TodayMovie from '../../components/TodayMovie';
import { getTrendingMovies, getPopularMovies, getAccountDetails } from './api';
import { useQuery } from '@tanstack/react-query';
import Togglebutton from '../../components/Togglebutton';
import Loading from '../../components/Loading';
import Footer from '../../components/Footer';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { client } from '../../helpers';
import { WindowOutlined } from '@mui/icons-material';
import Error from '../../components/Error';

function Home() {
  // const { isloggedIn, setIsLoggedIn } = useSessionStore();
  const [queryParams, setQueryParams] = useSearchParams();
  const [isloggedIn, setIsLoggedIn] = useState(false);

  // console.log(isloggedIn);
  const buttons = {
    today: 'day',
    week: 'week',
  };
  const [active, setIsActive] = useState('day');
  const {
    data: trendingData,
    error: trendingError,
    isLoading: trendingLoading,
  } = useQuery({
    queryKey: ['trendingMovies', { interval: active }],
    queryFn: getTrendingMovies,
  });

  const {
    data: popularData,
    error: popularError,
    isLoading: popularLoading,
  } = useQuery({
    queryKey: ['trendingpopularMovies'],
    queryFn: getPopularMovies,
  });
  const {
    data: accountData,
    error: accountdetailsError,
    isLoading: accountdetailsLoading,
  } = useQuery({
    queryKey: ['accountDetails'],
    queryFn: getAccountDetails,
  });
  // console.log(accountData);

  useEffect(() => {
    if (
      queryParams.get('request_token') &&
      queryParams.get('approved') &&
      queryParams.get('approved') === 'true'
    ) {
      client
        .post('authentication/session/new', {
          request_token: queryParams.get('request_token'),
        })
        .then((res) => {
          localStorage.setItem('session_id', res.data.session_id);

          window.open('http://localhost:5000', '_self');
        })
        .catch((error) => {});
    }

    if (localStorage.getItem('session_id')) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
  }, []);

  // if (trendingLoading || popularLoading) return <div>loading....</div>;

  return (
    <>
      <Navbar isLoggedIn={isloggedIn} />
      <div className="container">
        <Link to={'/details'}>
          <h2 className="container__heading">Welcome.</h2>
        </Link>
        <h3 className="container__subheading">
          Explore the Movies and People you like.
        </h3>
        <SearchInput className="container__search" />
      </div>

      <div className="togglebutton">
        <p className="togglebutton__title">Trending</p>
        <Togglebutton
          button1="Today"
          onclick={() => setIsActive(buttons.today)}
          active={active === buttons.today ? true : false}
        />
        <Togglebutton
          button1="Week"
          onclick={() => setIsActive(buttons.week)}
          active={active === buttons.week ? true : false}
        />
      </div>

      {trendingLoading ? (
        <Loading />
      ) : (
        <TodayMovie data={trendingData} active={active} />
      )}

      <div className="popular">
        <p className="popular__title">What's Popular</p>
        {popularLoading ? <Loading /> : <TodayMovie data={popularData} />}
      </div>

      {accountdetailsLoading ? (
        <Loading />
      ) : accountdetailsError ? (
        <Error />
      ) : (
        <Footer accountData={accountData} isloggedIn={isloggedIn} />
      )}
    </>
  );
}

export default Home;
