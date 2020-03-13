import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ChampCard = ({
  champion: {
    title, blurb, id, imagem,
  },
}) => (
  <div className="row">
    <div className="col s12 m7">
      <div className="card movie-card">
        <Link to={`/movies/${id}`}>
          <div className="card-image">
            <img alt={id} className="movie-card-image" src={imagem} />
            <span className="card-title">{`${id} ${title}`}</span>
          </div>
          <div className="card-content">
            <p>{blurb}</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default ChampCard;
ChampCard.propTypes = PropTypes.shape({
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }),
}).isRequired;
