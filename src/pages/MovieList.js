import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: '',
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((response) => this.setState({ movies: response }));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (!movies) return <h2>Carregando...</h2>;

    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
