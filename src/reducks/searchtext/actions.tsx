export const SEARCH_TEXT = "SEARCH_TEXT";
export const searchTextAction = (textState: any) => {
  return {
    type: "SEARCH_TEXT",
    payload: {
      text: textState.text,
    },
  };
};

export const MOVIE_ID = "MOVIE_ID";
export const movieIdAction = (idState: any) => {
  return {
    type: "MOVIE_ID",
    payload: {
      id: idState.id,
    },
  };
};

export const FAVORITE_MOVIE_ADD = "FAVORITE_MOVIE_ADD";
export const favorateMovieAddAction = (favoriteState: any) => {
  return {
    type: "FAVORITE_MOVIE_ADD",
    payload: {
      movieinfo: favoriteState.id,
      register: favoriteState.register,
    },
  };
};

export const FAVORITE_MOVIE_DELETE = "FAVORITE_MOVIE_DELETE";
export const favorateMovieDeleteAction = (favoriteState: any) => {
  return {
    type: "FAVORITE_MOVIE_DELETE",
    payload: {
      movieinfo: favoriteState.id,
      register: favoriteState.register,
    },
  };
};

export const FAVORITE_MOVIE_ID = "FAVORITE_MOVIE_ID";
export const favoriteMovieIdAction = (idState: any) => {
  return {
    type: "FAVORITE_MOVIE_ID",
    payload: {
      favoriteid: idState.id,
    },
  };
};
