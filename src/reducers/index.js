import { combineReducers } from 'redux';

import userReducer from './user';
import cityReducer from './city';
import eventReducer from './event';
import dogReducer from './dog';
import mapReducer from './map';
import navReducer from './nav';

const rootReducer = combineReducers({
  city: cityReducer,
  user: userReducer,
  event: eventReducer,
  dog: dogReducer,
  map: mapReducer,
  nav: navReducer,
});

export default rootReducer;
