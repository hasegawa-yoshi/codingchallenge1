export const SEARCH_TEXT = "SEARCH_TEXT";
export const searchTextAction = (textState) => {
  return {
    type: "SEARCH_TEXT",
    payload: {
      text: textState.text,
    },
  };
};

export const MOVIE_ID = "MOVIE_ID";
export const movieIdAction = (idState) => {
  return {
    type: "MOVIE_ID",
    payload: {
      id: idState.id,
    },
  };
};

export const FAVORITE_MOVIE_ADD = "FAVORITE_MOVIE_ADD";
export const favorateMovieAddAction = (favoriteState) => {
  return {
    type: "FAVORITE_MOVIE_ADD",
    payload: {
      id: favoriteState.id,
      register: favoriteState.register,
    },
  };
};
