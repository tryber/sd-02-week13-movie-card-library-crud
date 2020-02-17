import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';


class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
      .then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    return (
      <MovieForm onSubmit={this.handleSubmit} />
    );
  }
}

NewMovie.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default NewMovie;
