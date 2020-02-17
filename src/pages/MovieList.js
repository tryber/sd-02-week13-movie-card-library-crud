import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      movies: '',
    };
  }

  componentDidMount() {
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
      <div>
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        <div className="center-align">
          <Link className="waves-effect waves-light btn" to={'/movies/new'}>New Movie</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
