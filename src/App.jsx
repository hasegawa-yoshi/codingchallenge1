import React from 'react';
import { useSelector } from 'react-redux';
import { MovieApi } from './api/MovieApi';
import './App.css';

import HeaderComponents from './components/organisms/HeaderComponents';

function App() {
  const searchText = useSelector((state)=>state)

  console.log(searchText)

  const API_KEY = "4f572de575a44a43f43968b4c4d31e12"; 


   const requests ={
    feactMovies:`/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`,
    searchMovies:`/search/movie?api_key=${API_KEY}&query=${searchText.text}&page=1`,
}

  return (
    <div className="App">
      <HeaderComponents />
      <MovieApi fetchUrl={requests.searchMovies} />
    </div>
  );
}

export default App;
