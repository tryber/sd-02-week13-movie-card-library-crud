import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((data) => this.setState({
        movies: data,
        loading: false,
      }));
  }


  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    if (loading) return <Loading />;
    return (
      <div className="add-card">
        <Link to="/movies/new"><br />ADICIONAR CARTÃO</Link>
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    );
  }
}


export default MovieList;
