import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((data) => this.setState({
        movies: data,
        isLoading: false,
      }));
  }

  render() {
    const { movies, isLoading } = this.state;
    // Render Loading here if the request is still happening
    if (isLoading) return <Loading />;
    return (
      <div>
        <Link to="/movies/new"> ADICIONAR CARTÃO </Link>
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
