import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: '',
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (!movies) return <Loading />;

    return (
      // eslint-disable-next-line react/jsx-fragments
      <Fragment>
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        <div style={{ paddingBottom: '3rem', textAlign: 'center' }}>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </Fragment>
    );
  }
}

export default MovieList;
