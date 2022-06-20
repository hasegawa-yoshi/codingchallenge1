import React from "react";
import { useSelector } from "react-redux";
import FooterComponents from "../organisms/FooterComponents";

const FavoriteMovie = () => {
  const favoriteMovieSelector = useSelector(
    (state: any) => state.FavoriteMovieReducer
  );

  console.log(favoriteMovieSelector);
  return (
    <div>
      <h1>FavoriteMovie</h1>
      <FooterComponents />
    </div>
  );
};

export default FavoriteMovie;
