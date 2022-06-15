import React from "react";
import { useSelector } from "react-redux";

const MovieIntro = () => {
  const movieIdSelector = useSelector((state) => state.MovieIdReducer);

  console.log(movieIdSelector.id);

  return <div>MovieIntro</div>;
};

export default MovieIntro;
