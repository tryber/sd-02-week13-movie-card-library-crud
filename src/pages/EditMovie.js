import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      status: 'loading',
      shouldRedirect: false,
      movie: {
        id: 0,
        title: '',
        subtitle: '',
        imagePath: '',
        storyline: '',
        genre: '',
        rating: 0,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;

    movieAPI.getMovie(id).then((movie) => {
      this.setState({
        movie,
        status: '',
      });
    });
  }

  handleSubmit(updatedMovie) {
    const { id } = this.state;

    const obj = {
      ...updatedMovie,
      id,
    };

    this.setState({
      shouldRedirect: true,
    });

    movieAPI.updateMovie(obj, this);
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

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
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
