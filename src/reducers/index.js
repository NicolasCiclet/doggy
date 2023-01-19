import { combineReducers } from 'redux';

import userReducer from './user';
import cityReducer from './city';
import eventReducer from './event';

const rootReducer = combineReducers({
  city: cityReducer,
  user: userReducer,
  event: eventReducer,
});

export default rootReducer;
