import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import Notfound from './pages/NotFound';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={(props) => (
            <MovieDetails {...props} />)}
        />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="movies/:id/edit" component={EditMovie} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
