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

  return <div>MovieIntro</div>;
};

export default MovieIntro;
