import { combineReducers } from 'redux';
import api from './apiReduce';
import details from './reduceDetails';
import filter from './reduceFilter';

const rootReducer = combineReducers({
  api,
  details,
  filter,
});

export default rootReducer;
