import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Filter = ({ filt }) => (
  <div className="row inputFilter">
    <div className="input-field col s6">
      <input
        onChange={({ target }) => filt(target.value)}
        id="input_text"
        className="input_text"
        type="text"
        data-length="10"
      />
      <label htmlFor="input_text">Pesquisar Por nome</label>
    </div>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  filt: (v) => dispatch({ type: 'FILTER', value: v }),
});

export default connect(null, mapDispatchToProps)(Filter);

Filter.propTypes = PropTypes.shape({
  filt: PropTypes.func,
}).isRequired;
