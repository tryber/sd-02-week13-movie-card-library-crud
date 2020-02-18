import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirecionar: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
      .then(() => {
        this.setState({ redirecionar: true });
      });
  }

  render() {
    const { redirecionar } = this.state;
    if (redirecionar) return <Redirect to="/" />;
    return (
      <MovieForm onSubmit={this.handleSubmit} />
    );
  }
}
export default NewMovie;
