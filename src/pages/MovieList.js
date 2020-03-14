import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (movies.length === 0) return <Loading />;

    return (
      // eslint-disable-next-line react/jsx-fragments
      <Fragment>
        <div className="add-movie glow-on-hover">
          <Link to="/movies/new">ADICIONAR NOVO FILME</Link>
        </div>
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </Fragment>
    );
  }
}

export default MovieList;
