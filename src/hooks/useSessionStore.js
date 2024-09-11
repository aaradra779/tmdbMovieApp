// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { client } from '../helpers';

// function useSessionStore() {
//   const [queryParams] = useSearchParams();
//   const [isloggedIn, setIsLoggedIn] = useState(false);

//   const getSession = async () => {
//     if (
//       queryParams.get('request_token') &&
//       queryParams.get('approved') &&
//       queryParams.get('approved') === 'true'
//     ) {
//       client
//         .post('authentication/session/new', {
//           request_token: queryParams.get('request_token'),
//         })
//         .then((res) => {
//           console.log(res.data.message);
//           localStorage.setItem('session_id', res.data.session_id);
//           setIsLoggedIn(true);
//           window.location.reload();
//         })
//         .catch((err) => {
//           console.log(err.message);
//         });
//     }
//   };
//   useEffect(() => {
//     getSession();
//   }, [queryParams]);

//   return { isloggedIn, setIsLoggedIn };
// }

// export default useSessionStore;
