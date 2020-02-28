import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import {
  MovieList,
  NewMovie,
  MovieDetails,
  EditMovie,
  NotFound,
} from './pages/index';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
