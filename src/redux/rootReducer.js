import { combineReducers } from 'redux';
import { carsReducer } from './carsSlice';
import { filterReducer } from './filterSlice';

export const rootReducer = combineReducers({
  cars: carsReducer,
  filter: filterReducer,
});
