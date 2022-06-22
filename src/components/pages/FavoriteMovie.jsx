import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FooterComponents from "../organisms/FooterComponents";

const base_url = "https://image.tmdb.org/t/p/original";

const FavoriteMovie = () => {
  const favoriteMovieSelector = useSelector(
    (state) => state.FavoriteMovieReducer.favorites
  );
  /*
  const [movies, setMovies] = useState<Movie[]>([]);

  let favoritemovies: any[] = [];

  let favoritesURL: any[] = [];

  for (let i = 0; i < favoriteMovieSelector.length; i++) {
    favoritesURL[
      favoritesURL.length
    ] = `/movie/${favoriteMovieSelector[i].id}?api_key=${API_KEY}&language=ja`;
  }

  async function fetchData() {
    for (let i = 0; i < favoritesURL.length; i++) {
      const request = await instance.get(favoritesURL[i]);
      setMovies(request.data);
      favoritemovies[favoritemovies.length] = movies;
      return request;
    }
  }

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(favoritesURL[2]);
      setMovies(request.data);
      return request;
    }
    fetchData();
  }, [favoritesURL[2]]);
  */

  console.log(favoriteMovieSelector);
  console.log(favoriteMovieSelector[2].movieinfo.id);

  const dispatch = useDispatch();
  const history = useHistory();

  const onClickMovieImg = (x) => {
    dispatch({
      type: "FAVORITE_MOVIE_ID",
      payload: {
        favoriteid: favoriteMovieSelector.filter(
          (favorite) => favorite.register === true
        )[x].movieinfo.id,
      },
    });
    history.push("/favoritemovieintro");
  };

  /*
  console.log(favoritesURL);
  console.log(movies);
  console.log(favoritemovies);
  */

  return (
    <div style={{ textAlign: "center", margin: 0 }}>
      <h1>お気に入りリスト</h1>
      <Grid container alignItems="center" justifyContent="center">
        {favoriteMovieSelector
          .filter((favorite) => favorite.register === true)
          .map((favorite, index) => (
            <Grid item xs={6} sm={4} md={3}>
              <img
                key={favorite.movieinfo.id}
                src={`${base_url}${favorite.movieinfo.backdrop_path}`}
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
