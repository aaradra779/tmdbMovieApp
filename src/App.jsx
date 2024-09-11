import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import { Outlet } from 'react-router-dom';
import SearchResults from './pages/searchResults/SearchResults';
import { Details } from '@mui/icons-material';

function App() {
  return (
    <>
      {/* <Home />
      <SearchResults />
      <Details /> */}
      <Outlet />
    </>
  );
}

export default App;
