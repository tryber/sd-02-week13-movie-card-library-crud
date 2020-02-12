import React, { Component } from 'react';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.movie = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      genre: '',
      rating: 0,
    };
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie, this);
  }

  render() {
    return (
      <MovieForm onSubmit={this.handleSubmit} movie={this.movie} />
    );
  }
}

export default NewMovie;
