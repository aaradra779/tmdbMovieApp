import React, { useEffect, useState } from 'react';
import Topbar from '../../components/topbar/Topbar';
import Main from '../../components/main/Main';
import { useSearchParams } from 'react-router-dom';
import { client } from '../../helpers';
import Footer from '../../components/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/userSlice';

function Home() {
  const [queryParams] = useSearchParams();
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);

  const getSessionId = () => {
    return localStorage.getItem('session_id');
  };

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

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
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }

    dispatch(fetchUser());

    // const fetchApi = async () => {
    //   const session_id = getSessionId();
    //   const accountResponse = await client.get(
    //     `account?session_id=${session_id}`
    //   );

    //   setUserData(accountResponse.data);
    //   console.log(accountResponse.data);
    // };
    // fetchApi();
  }, [dispatch]);

  return (
    <>
      {/* <div>Home</div> */}

      <div className="homeContainer">
        {/* <Topbar /> */}
        <Main />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Home;
