import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_KEY } from "../../api/Apikey";
import instance from "../../api/axios";

export const MovieIntro = () => {
  const movieIdSelector = useSelector((state) => state.MovieIdReducer);

  const movieintroUrl = `/movie/${movieIdSelector.id}?api_key=${API_KEY}`;

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

  console.log(movie);

  return (
    <div style={{ margin: 0, textAlign: "center" }}>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.name}
        style={{ width: "95%", padding: "5px", cursor: "pointer" }}
      />
      <h1>{movie.original_title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieIntro;
