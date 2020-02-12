import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      movie: {},
    };
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;

    movieAPI.getMovie(id).then((movie) => {
      this.setState({
        movie,
      });
    });
  }

  delete() {
    const { id } = this.state;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { id } = this.state;
    const { movie = {} } = this.state;

    const {
      title = '',
      subtitle = '',
      imagePath = '',
      storyline = '',
      genre = '',
      rating = 0,
    } = movie;

    if (typeof movie.title === 'undefined') return <Loading />;
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
              <Link to={`/movies/${id}/edit`}>
                EDITAR
              </Link>
              <Link to="/">
                VOLTAR
              </Link>
              <Link to="/" onClick={this.delete}>
                DELETAR
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
