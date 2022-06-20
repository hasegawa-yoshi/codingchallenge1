import * as Actions from "./actions";
import {
  favoriteIdInitialState,
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
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  SearchTextReducer,
  MovieIdReducer,
  FavoriteMovieReducer,
});
