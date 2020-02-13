import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
      .then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    if (this.state.shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <MovieForm onSubmit={this.handleSubmit} />
    );
  }
}
export default NewMovie;
