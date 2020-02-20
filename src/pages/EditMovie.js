import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
      link: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovie(match.params.id)
      .then((data) => this.setState({
        movie: data,
        status: 'notLoading',
      }));
  }

  handleSubmit(updatedMovie) {
    const { history } = this.props;
    movieAPI.updateMovie(updatedMovie)
      .then(() => this.setState({
        shouldRedirect: true,
        link: history.push('/'),
      }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    const { link } = this.state;
    if (shouldRedirect) {
      // window.location.href = '/';
      // return link;
      return <Redirect to={link} />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <MovieForm movie={movie} onSubmit={this.handleSubmit} />
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default EditMovie;
