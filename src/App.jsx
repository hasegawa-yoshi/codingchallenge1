import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/pages/Home";
import MovieIntro from "./components/pages/MovieIntro";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movieintro">
          <MovieIntro />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
