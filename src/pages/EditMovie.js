import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';


import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      shouldRedirect: false,
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    console.log(this.props);
    movieAPI.getMovie(match.params.id)
      .then((data) => this.setState({
        movie: data,
        status: 'NotLoading',
      }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(() => this.setState( {shouldRedirect: true }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    console.log(this.props);
    if (shouldRedirect) {
      <Redirect to='/' />
    }

    if (status === 'loading') {
      <Loading />;
    }

    return (
      <MovieForm movie={movie} onSubmit={this.handleSubmit} />
    );
  }
}

export default EditMovie;
