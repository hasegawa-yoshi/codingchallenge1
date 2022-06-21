import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import FooterComponents from "../organisms/FooterComponents";

const base_url = "https://image.tmdb.org/t/p/original";

const FavoriteMovie = () => {
  const favoriteMovieSelector = useSelector(
    (state: any) => state.FavoriteMovieReducer.favorites
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
          .filter((favorite: any) => favorite.register === true)
          .map((favorite: any, index: any) => (
            <Grid item xs={6} sm={4} md={3}>
              <img
                key={favorite.id.id}
                src={`${base_url}${favorite.id.backdrop_path}`}
                alt={favorite.id.name}
                style={{ width: "95%", padding: "5px", cursor: "pointer" }}
              />
            </Grid>
          ))}
      </Grid>

      <FooterComponents />
    </div>
  );
};

export default FavoriteMovie;
