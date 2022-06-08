import React from 'react';
import { MovieApi } from './api/MovieApi';
import { requests } from './api/request';
import './App.css';

import HeaderComponents from './components/organisms/HeaderComponents';

function App() {
  return (
    <div className="App">
      <HeaderComponents />
      <MovieApi fetchUrl={requests.feactMovies} />
      <MovieApi fetchUrl={requests.searchMovies} />
    </div>
  );
}

export default App;
