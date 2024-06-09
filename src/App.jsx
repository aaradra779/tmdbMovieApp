import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './pages/home/Home';
import { Outlet } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Topbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
