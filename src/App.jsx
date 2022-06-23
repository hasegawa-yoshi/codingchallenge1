import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import FavoriteMovie from "./components/pages/FavoriteMovie";
import FavoriteMovieIntro from "./components/pages/FavoriteMovieIntro";

import Home from "./components/pages/Home";
import MovieIntro from "./components/pages/MovieIntro";
import SearchMovie from "./components/pages/SearchMovie";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <SearchMovie />
        </Route>
        <Route path="/movieintro">
          <MovieIntro />
        </Route>
        <Route path="/favorites">
          <FavoriteMovie />
        </Route>
        <Route path="/favoritemovieintro">
          <FavoriteMovieIntro />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
