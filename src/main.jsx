import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import SearchResults from './pages/searchResults/SearchResults.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Details from './pages/movieDetails/Details.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/SearchResults" element={<SearchResults />} />
      <Route path="/details" element={<Details />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </QueryClientProvider>
  </React.StrictMode>
);
