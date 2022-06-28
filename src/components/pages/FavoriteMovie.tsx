import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FooterComponents from "../organisms/FooterComponents";
import IMG from "../../gazonashi.jpeg";

const base_url = "https://image.tmdb.org/t/p/original";

const FavoriteMovie = () => {
  const favoriteMovieSelector = useSelector(
    (state: any) => state.FavoriteMovieReducer.favorites
  );
  const favoriteMovieSelector2 = favoriteMovieSelector.reduce(
    (a: any, v: any) => {
      if (!a.some((e: any) => e.movieinfo.id === v.movieinfo.id)) {
        a.push(v);
      }
      return a;
    },
    []
  );

  console.log(favoriteMovieSelector);
  console.log(favoriteMovieSelector2);

  const dispatch = useDispatch();
  const history = useHistory();

  const onClickMovieImg = (x: any) => {
    dispatch({
      type: "FAVORITE_MOVIE_ID",
      payload: {
        favoriteid: favoriteMovieSelector2.filter(
          (favorite: any) => favorite.register === true
        )[x].movieinfo.id,
      },
    });
    history.push({
      pathname: "/favoritemovieintro",
      search: favoriteMovieSelector2.filter(
        (favorite: any) => favorite.register === true
      )[x].movieinfo.original_title,
    });
  };

  /*
  console.log(favoritesURL);
  console.log(movies);
  console.log(favoritemovies);
  */

  return (
    <div style={{ textAlign: "center", margin: 0 }}>
      <h1>お気に入りリスト</h1>
      <h4>画像クリックで映画詳細を表示</h4>
      <Grid container alignItems="center" justifyContent="center">
        {favoriteMovieSelector2
          .filter((favorite: any) => favorite.register === true)
          .map((favorite: any, index: any) => (
            <Grid item xs={6} sm={4} md={3} key={favorite.movieinfo.id}>
              <img
                key={favorite.movieinfo.id}
                src={
                  favorite.movieinfo.backdrop_path === null
                    ? IMG
                    : `${base_url}${favorite.movieinfo.backdrop_path}`
                }
                alt={favorite.movieinfo.name}
                style={{ width: "95%", padding: "5px", cursor: "pointer" }}
                onClick={() => onClickMovieImg(index)}
              />
            </Grid>
          ))}
      </Grid>

      <FooterComponents />
    </div>
  );
};

export default FavoriteMovie;
