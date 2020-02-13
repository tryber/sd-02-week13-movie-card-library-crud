import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      redirect: false,
    };
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(
      this.setState({
        redirect: true,
      }),
    );
  }

  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <MovieForm onSubmit={this.handleSubmit} />
    );
  }
}
export default NewMovie;
