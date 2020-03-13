import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchChamps from '../store/actions';
import {
  Loading, ChampCard, Filter, NoResults,
} from '../components';

class ChampList extends Component {
  static saveChamps(champs) {
    return ({ type: 'RESULTS', champs });
  }

  componentDidMount() {
    const arr = [];
    const { getChamps, setChamps } = this.props;
    getChamps()
      .then(({ data }) => {
        const aux = Object.keys(data);
        for (let i = 0; i < aux.length; i += 1) {
          arr[i] = data[aux[i]];
          arr[i].imagem = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data[aux[i]].id}_0.jpg`;
        }
        setChamps(arr);
      });
  }

  render() {
    const { isFetch, champs, nameInput } = this.props;
    if (isFetch) return <Loading />;
    const results = champs.filter(({ name, title }) => name.match(new RegExp(nameInput, 'i')) || title.match(new RegExp(nameInput, 'i')));
    return (
      <div className="Master">
        <Filter />
        <div className="movie-list">
          {(results.length > 0)
            ? results.map((champion) => <ChampCard key={champion.id} champion={champion} />)
            : <NoResults />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ api: { champs, isFetch }, filter: { nameInput } }) => ({
  champs, isFetch, nameInput,
});
const mapDispatchToProps = (dispatch) => ({
  getChamps: () => dispatch(fetchChamps()),
  setChamps: (ele) => dispatch(ChampList.saveChamps(ele)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChampList);

ChampList.propTypes = PropTypes.shape({
  getChamps: PropTypes.func,
  setChamps: PropTypes.func,
  isFetch: PropTypes.bool,
  champs: PropTypes.instanceOf(Array),
  name: PropTypes.string,
}).isRequired;
