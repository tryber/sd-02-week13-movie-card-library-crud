import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies" component={MovieDetails} />
        <Route exact path="/movies/:id" render={(props) => (<MovieDetails {...props} />)} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route
          path="/movies"
          render={(props) => (
            <EditMovie {...props} />
          )}
        />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route path="" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
