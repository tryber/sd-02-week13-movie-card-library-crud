import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '' };
  }

  componentDidMount() {  
    movieAPI.getMovie(this.props.match.params.id)
      .then((movie) => this.setState({ movie }));     
  }

  render() {
    const { movie } = this.state;
    if (!movie) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie
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
      id: PropTypes.number }),
  }).isRequired,
};

export default MovieDetails;
