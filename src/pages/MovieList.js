import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
      telaLoading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((fichaMovie) => this.setState({
      movies: fichaMovie,
      telaLoading: false,
    }));
  }

  render() {
    const { movies, telaLoading } = this.state;

    if (telaLoading) return <Loading />;

    return (
      <div>
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        <div className="add-card">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
