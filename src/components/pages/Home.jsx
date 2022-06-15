import React from "react";
import { useSelector } from "react-redux";
import { MovieApi } from "../../api/MovieApi";
import HeaderComponents from "../organisms/HeaderComponents";

const Home = () => {
  const searchText = useSelector((state) => state.SearchTextReducer);

  const API_KEY = "4f572de575a44a43f43968b4c4d31e12";

  const requests = {
    feactMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`,
    searchMovies: `/search/movie?api_key=${API_KEY}&query=${searchText.text}&page=1`,
  };

  console.log(searchText);

  return (
    <div className="App">
      <HeaderComponents />
      <MovieApi fetchUrl={requests.searchMovies} />
    </div>
  );
};

export default Home;
