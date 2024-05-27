import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Main from '../../components/main/Main';

function Home() {
  return (
    <>
      {/* <div>Home</div> */}

      <div className="homeContainer">
        <Topbar />
        <Main />
      </div>
    </>
  );
}

export default Home;
