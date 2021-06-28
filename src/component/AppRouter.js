import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Navig from "./Navig";
import Main from "../router/Main";
import ArtworkList from "../router/ArtworkList";
import FineArt from "../router/FineArt";
import Movie from "../router/Movie";
import Cv from "../router/Cv";


const AppRouter = () => {
  return(
    <Router>
      <Navig />
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/artwork">
        <ArtworkList />
      </Route>
      <Route exact path="/talk_about_good_thing/fine_art">
        <FineArt />
      </Route>
      <Route exact path="/talk_about_good_thing/movie">
        <Movie />
      </Route>
      <Route exact path="/cv">
        <Cv />
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
    
  )
};

export default AppRouter;