import * as Actions from "./actions";
import {
  favoriteIdInitialState,
  favoriteMovieIdInitialState,
  movieIdInitialState,
  SearchTextInitialState,
} from "../store/initialState";
import { combineReducers } from "redux";

export const SearchTextReducer = (state = SearchTextInitialState, action) => {
  switch (action.type) {
    case Actions.SEARCH_TEXT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const MovieIdReducer = (state = movieIdInitialState, action) => {
  switch (action.type) {
    case Actions.MOVIE_ID:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const FavoriteMovieReducer = (
  state = favoriteIdInitialState,
  action
) => {
  switch (action.type) {
    case Actions.FAVORITE_MOVIE_ADD:
      return {
        favorites: [...state.favorites, action.payload],
      };
    case Actions.FAVORITE_MOVIE_DELETE:
      return {
        favorites: state.favorites.filter(
          (favorite) => favorite.movieinfo.id !== action.payload.movieinfo.id
        ),
      };
    default:
      return state;
  }
};

export const FavoriteMovieIdReducer = (
  state = favoriteMovieIdInitialState,
  action
) => {
  switch (action.type) {
    case Actions.FAVORITE_MOVIE_ID:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  SearchTextReducer,
  MovieIdReducer,
  FavoriteMovieReducer,
  FavoriteMovieIdReducer,
});
