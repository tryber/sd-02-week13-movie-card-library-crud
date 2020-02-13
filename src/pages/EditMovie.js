import React, { Component } from 'react';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((mov) => {
      console.log(mov)
      this.setState({
        status: '',
        movie: mov,
      });
    });
  }

  handleSubmit(updatedMovie) {
    console.log(updatedMovie);
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    console.log(movie)
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      return <Loading />
    }

    return (
      <MovieForm movie={movie} onSubmit={this.handleSubmit} />
    );
  }
}

export default EditMovie;
