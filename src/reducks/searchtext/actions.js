export const SEARCH_TEXT = "SEARCH_TEXT";
export const searchTextAction = (textState) => {
  return {
    type: "SEARCH_TEXT",
    payload: {
      text: textState.text,
    }
  }
}

export const MOVIE_ID = "MOVIE_ID";
export const movieIdAction = (idState) => {
  return {
    type: "MOVIE_ID",
    payload: {
      id: idState.id,
    }
  }
}