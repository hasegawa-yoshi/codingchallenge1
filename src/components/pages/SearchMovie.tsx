import React from "react";
import { useSelector } from "react-redux";
import { API_KEY } from "../../api/Apikey";
import { MovieApi } from "../../api/MovieApi";
import FooterComponents from "../organisms/FooterComponents";
import HeaderComponents from "../organisms/HeaderComponents";

const SearchMovie = () => {
  const searchText = useSelector((state: any) => state.SearchTextReducer);

  const requests = {
    feactMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`,
    searchMovies: `/search/movie?api_key=${API_KEY}&query=${searchText.text}&page=1`,
  };

  console.log(searchText);

  return (
    <div className="App">
      <HeaderComponents />
      <MovieApi fetchUrl={requests.searchMovies} />
      <FooterComponents />
    </div>
  );
};

export default SearchMovie;
