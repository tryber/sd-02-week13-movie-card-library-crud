import getChamps from '../../services/champAPI';

const requestChamp = () => ({ type: 'REQUEST' });
const receiveChamp = ({ data }) => ({ type: 'SUCCESS', data });
const receiveChampFailure = (error) => ({ type: 'FAILURE', error });


export default function fetchChamps() {
  return (dispatch) => {
    dispatch(requestChamp());
    return getChamps()
      .then(
        (results) => dispatch(receiveChamp(results)),
        (error) => dispatch(receiveChampFailure(error.message)),
      );
  };
}