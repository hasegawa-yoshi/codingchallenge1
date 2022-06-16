import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/pages/Home";
import MovieIntro from "./components/pages/MovieIntro";
import SearchMovie from "./components/pages/SearchMovie";

function App() {
  const searchText = useSelector((state) => state.SearchTextReducer);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search=">
          <SearchMovie />
        </Route>
        <Route path="/movieintro">
          <MovieIntro />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
