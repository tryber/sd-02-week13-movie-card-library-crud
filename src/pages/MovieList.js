import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, movies: [] };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((data) => this.setState({ loading: false, movies: data }));
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    if (loading) return <Loading />;

    return (
      <div className="center-align">
        <Link className="waves-effect waves-light btn " to="/movies/new">ADICIONAR CARTÃO</Link>
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
