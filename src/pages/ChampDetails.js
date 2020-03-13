import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loading } from '../components';


class ChampDetails extends Component {
  static spells(spells) {
    return (
      <div className="card-action">
        <h3 className="whiteDetails">Spells</h3>
        {spells.map((ele) => (
          <div key={ele.name}>
            <p className="whiteDetails">{ele.name}</p>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/spell/${ele.image.full}`}
              alt={ele.name}
            />
            <p className="whiteDetails">{ele.description}</p>
            <br />
          </div>
        ))}
      </div>
    );
  }

  static card(title, lore, partype, tags, name) {
    return (
      <div className="card">
        <div className="card-image">
          <img alt={name} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`} />
          <span className="card-title">{name}</span>
        </div>
        <div className="card-content">
          <p>{`${title}`}</p>
          <p>{`lore: ${lore}`}</p>
          <p>{`Tipo: ${partype}`}</p>
          <p>
            Classes:
            {tags.map((ele) => <span key={ele}>{` ${ele} |`}</span>)}
          </p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { champ, match: { params: { id } } } = this.props;
    fetch(`http://ddragon.leagueoflegends.com/cdn/10.5.1/data/pt_BR/champion/${id}.json`)
      .then((response) => response.json())
      .then(({ data }) => champ(Object.values(data)[0]));
  }

  render() {
    const { selected, loading } = this.props;
    if (loading) return <Loading />;
    const {
      title, lore, partype, tags, name, spells,
    } = selected;
    return (
      <div className="row CardDetails">
        <div className="col s12 m7">
          <Link to="/">VOLTAR</Link>
          {ChampDetails.card(title, lore, partype, tags, name)}
        </div>
        <div>
          {ChampDetails.spells(spells)}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  champ: (champ) => dispatch({ type: 'DETAILS', champ }),
});
const mapStateToProps = ({ details: { selected, loading } }) => ({ selected, loading });

export default connect(mapStateToProps, mapDispatchToProps)(ChampDetails);
ChampDetails.propTypes = PropTypes.shape({
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}).isRequired;
