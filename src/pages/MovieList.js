import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], loading: true };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((data) => this.setState({ movies: data, loading: false }));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (this.state.loading) {
      return (
        <Loading />
      );
    }

    return (
      <div>
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        <div className="link-add-card">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
