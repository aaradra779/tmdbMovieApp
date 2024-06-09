import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/home/Home.jsx';

import Feed from './pages/feed/Feed.jsx';
import MovieList from './components/movieList/MovieList.jsx';
import Profile from './components/profile/Profile.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Preview from './components/preview/Preview.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/preview" element={<Preview />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />

      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);
