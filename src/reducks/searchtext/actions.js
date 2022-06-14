export const SEARCH_TEXT = "SEARCH_TEXT";
export const searchTextAction = (textState) => {
  return {
    type: "SEARCH_TEXT",
    payload: {
      text: textState.text,
    }
  }
}