import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      form: {
        id: '',
        title: '',
        subtitle: '',
        storyline: '',
        rating: '',
        imagePath: '',
        bookmarked: false,
        genre: 'action',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(() =>
      this.setState({
        shouldRedirect: true,
      }),
    );
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    return (
      <MovieForm onSubmit={this.handleSubmit} />
    );
  }
}
export default NewMovie;
