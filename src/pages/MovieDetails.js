import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '', loading: true };
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
    .then((data) => this.setState({ movie: data, loading: false }));
  }

  delete() {
    movieAPI.deleteMovie(this.state.movie.id)
  }

  render() {
    // Change the condition to check the state
    if (this.state.loading) {
      return (
        <Loading />
      );
    }

    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img alt="Movie Cover" src={`../${imagePath}`} />
              <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
              <p>{`Subtitle: ${subtitle}`}</p>
              <p>{`Storyline: ${storyline}`}</p>
              <p>{`Genre: ${genre}`}</p>
              <p>{`Rating: ${rating}`}</p>
            </div>
            <div className="card-action">
              <Link to={`/movies/${id}/edit`}>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
              <Link to="/" onClick={this.delete}>APAGAR</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
