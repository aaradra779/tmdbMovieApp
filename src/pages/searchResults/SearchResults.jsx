import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchedResults } from './searchresultsApi';
import SearchresultsList from '../../components/SearchresultsList';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import SearchInput from '../../components/SearchInput';
import SearchedResultSideBarCount from '../../components/SearchedResultSideBarCount';
import Navbar from '../../components/Navbar';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const searchparams = `${searchParams.get('q')}`;
  // console.log(searchparams);
  // const selected = {
  //   movie: `movie?query=${searchParams.get('q')}`,
  //   tv: `tv?query=${searchParams.get('q')}`,
  //   person: `person?query=${searchParams.get('q')}`,
  // };

  // const [searchResults, setSearchResults] = useState(
  //   `movie?query=${searchParams.get('q')}`
  // );

  const selected = {
    movies : 'movie?query=' + searchparams,
    tvs : 'tv?query=' + searchparams,
    persons : 'person?query=' + searchparams,
  }
  const [active, setIsActive] = useState(selected.movies);

  // const selected = {
  //   movie : 'movie?query=' + searchparams,
  //   tv : 'tv?query=' + searchparams,
  //   person : 'person?query=' + searchparams,
  // }
  // const [selectedMovie, setSelectedMovie] = useState(selected.movie);
  // const [selectedTv, setSelectedTv] = useState(selected.tv);
  // const [selectedPerson, setSelectedPerson] = useState(selected.person);
  // console.log(selectedMovie);

  const {
    data: searchedData,
    error: searchedError,
    isLoading: searchLoading,
  } = useQuery({
    queryKey: ['searchResults', { interval: active}],
    queryFn: getSearchedResults,
  });
  console.log(searchedData);

  return (
    <>
    <Navbar />
      <SearchInput   />
      <div className="searchedResults">
        <div className="searchedResults__sidebar">
        <div className="searchedResults__title">
        <p className="searchedResults__text">Search Results</p>   </div>
          <SearchedResultSideBarCount

         title = 'Movies'
         onclick={() => setIsActive(selected.movies)}
         active={active === selected.movies? true : false}
         count = {searchedData}
     
            />
          <SearchedResultSideBarCount

         title = 'Tv Shows'
         onclick={() => setIsActive(selected.tvs)}
         active={active === selected.tvs? true : false}
         count = {searchedData}
         
     
            />
          <SearchedResultSideBarCount

         title = 'Persons'
         onclick={() => setIsActive(selected.persons)}
         active={active === selected.persons? true : false}
         count = {searchedData}
     
            />
      
          

        </div>

        <div className="searchedResults__results">
          {searchLoading ? <Loading /> : searchedError ? <Error /> : <SearchresultsList searchedData={searchedData} />}
        </div>
      </div>
    </>
  );
}

export default SearchResults;
