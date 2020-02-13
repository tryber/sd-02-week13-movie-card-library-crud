import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
        <h1>My Movie Card Library CRUD</h1>
        <Route path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="movies/:id/edit" component={EditMovie} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
