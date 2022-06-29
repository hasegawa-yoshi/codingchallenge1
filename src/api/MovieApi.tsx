import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import instance from "./axios";
import { useHistory, useLocation } from "react-router-dom";
import IMG from "../gazonashi.jpeg";

type Props = {
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
  original_title: string;
};

const base_url = "https://image.tmdb.org/t/p/original";

export const MovieApi = ({ fetchUrl }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  /*const searchTextSelector = useSelector(
    (state: any) => state.SearchTextReducer
  );*/

  const dispatch = useDispatch();

  const history = useHistory();

  const onClickMovieImg = (x: any) => {
    dispatch({
      type: "MOVIE_ID",
      payload: {
        id: movies[x].id,
      },
    });
    history.push({ pathname: "/movieintro", search: movies[x].original_title });
  };

  const presearch = useLocation().search;

  const search = presearch.slice(1);

  return (
    <div style={{ paddingTop: "70px", paddingBottom: "30px" }}>
      <h2>{search}の検索結果</h2>
      <h4>画像クリックで映画詳細を表示</h4>
      <Grid container alignItems="center" justifyContent="center">
        {" "}
        {movies.map((movie, i) => (
          <Grid item xs={6} sm={4} md={3} key={movie.id}>
            <img
              key={movie.id}
              src={
                movie.backdrop_path === null
                  ? IMG
                  : `${base_url}${movie.backdrop_path}`
              }
              alt={movie.name}
              style={{ width: "95%", padding: "5px", cursor: "pointer" }}
              onClick={() => onClickMovieImg(i)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
