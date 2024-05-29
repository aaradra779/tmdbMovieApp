import React, { useEffect, useState } from 'react';
import Topbar from '../../components/topbar/Topbar';
import Main from '../../components/main/Main';
import { useSearchParams } from 'react-router-dom';
import { client } from '../../helpers';
import Footer from '../../components/footer/Footer';

function Home() {
  const [queryParams] = useSearchParams();
  const [isloggedIn, setIsLoggedIn] = useState(false);

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
          // console.log(res.data);
          localStorage.setItem('session_id', res.data.session_id);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      {/* <div>Home</div> */}

      <div className="homeContainer">
        <Topbar />
        <Main />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Home;
