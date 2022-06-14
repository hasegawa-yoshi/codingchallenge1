import * as Actions from "./actions";
import initialState from "../store/initialState";

export const SearchTextReducer = (state = initialState, action) => {
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
