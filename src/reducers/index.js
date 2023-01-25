import { combineReducers } from 'redux';

import userReducer from './user';
import cityReducer from './city';
import eventReducer from './event';
import dogReducer from './dog';
import mapReducer from './map';

const rootReducer = combineReducers({
  city: cityReducer,
  user: userReducer,
  event: eventReducer,
  dog: dogReducer,
  map: mapReducer,
});

export default rootReducer;
