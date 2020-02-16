import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      movie: [],
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((mov) => {
      this.setState({
        status: '',
        movie: mov,
      });
    });
  }

  handleSubmit(updatedMovie) {
    console.log(updatedMovie)
    movieAPI.updateMovie(updatedMovie).then(() =>
      this.setState({
        shouldRedirect: true,
      }),
    );
  }

  render() {
    console.log()
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
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
