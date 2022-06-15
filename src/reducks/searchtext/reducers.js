import * as Actions from "./actions";
import { movieIdInitialState, SearchTextInitialState } from "../store/initialState";
import { combineReducers } from "redux";

export const SearchTextReducer = (state = SearchTextInitialState, action) => {
  switch (action.type){
    case Actions.SEARCH_TEXT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export const MovieIdReducer = (state = movieIdInitialState, action) => {
  switch (action.type){
    case Actions.MOVIE_ID:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  SearchTextReducer,
  MovieIdReducer,
})
