import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      carregando: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((data) => {
        this.setState({
          movies: data,
          carregando: false,
        });
      });
  }

  render() {
    const { movies, carregando } = this.state;
    if (carregando) return <Loading />;

    return (
      <div>
        <p style={{ textAlign: 'center' }}><Link to="/movies/new">ADICIONAR CARTÃO</Link></p>
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
