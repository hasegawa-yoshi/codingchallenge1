import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_KEY } from "../../api/Apikey";
import instance from "../../api/axios";
import FooterComponents from "../organisms/FooterComponents";

export const MovieIntro = () => {
  const movieIdSelector = useSelector((state) => state.MovieIdReducer);

  const movieintroUrl = `/movie/${movieIdSelector.id}?api_key=${API_KEY}&language=ja`;

  console.log(movieIdSelector.id);

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(movieintroUrl);
      setMovie(request.data);
      return request;
    }
    fetchData();
  }, [movieintroUrl]);

  const dispatch = useDispatch();

  const onClickFavoriteButton = () => {
    const favoriteid = movie;
    const favoriteregister = true;
    dispatch({
      type: "FAVORITE_MOVIE_ADD",
      payload: {
        movieinfo: favoriteid,
        register: favoriteregister,
      },
    });
    alert(`${favoriteid.original_title}をお気に入りに登録しました`);
  };

  console.log(movie);

  return (
    <div style={{ margin: 0, textAlign: "center" }}>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.name}
        style={{ width: "60%", padding: "5px", cursor: "pointer" }}
      />
      <br />
      <Button
        variant="outlined"
        sx={"margin:5px;color:blue;"}
        onClick={onClickFavoriteButton}
      >
        お気に入りに追加
      </Button>
      <Button variant="outlined" sx={"margin:5px;color:red;"}>
        お気に入りから削除
      </Button>
      <h1>{movie.original_title}</h1>
      <p>{movie.overview}</p>
      <FooterComponents />
    </div>
  );
};

export default MovieIntro;
