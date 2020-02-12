import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    await movieAPI.getMovies().then((movies) => {
      this.setState({
        movies: [...movies],
      });
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
