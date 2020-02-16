import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      load: false,
      movies: '',
    };
  }

  componentDidMount(){
    movieAPI.getMovies()
    .then((data) => this.setState({
      movies: data,
      load: true,
    }));
  }

  render() {
    const { load, movies } = this.state;
    if (!load) return <Loading />;
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
