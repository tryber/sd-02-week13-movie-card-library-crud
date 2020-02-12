import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      isLoading: true,
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovie(match.params.id)
      .then((data) => this.setState({
        movie: data,
        isLoading: false,
      }));
  }

  componentWillUnmount() {
  }

  deleteMovie() {
    const { movie } = this.state;
    console.log('oi');
    movieAPI.deleteMovie(movie.id);
  }

  render() {
    const { isLoading, movie } = this.state;
    // Change the condition to check the state
    if (isLoading) return <Loading />;

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
              <Link to={`/movies/${id}/edit`}> EDITAR </Link>
              <Link to="/"> VOLTAR </Link>
              <Link to="/" onClick={this.deleteMovie}> DELETAR </Link>
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
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
