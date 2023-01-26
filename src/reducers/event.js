import events from 'src/data/eventForTest';
import { AUTHOR_NEW_EVENT, DATE_NEW_EVENT, DESCRIB_NEW_EVENT, PLACE_NEW_EVENT, TITLE_NEW_EVENT } from '../actions/event';

const initialState = {
  eventsToDisplay: events,
  titleNewEvent: '',
  dateNewEvent: '',
  placeNewEvent: '',
  authorNewEvent: '',
  describNewEvent: '',
};

const eventReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TITLE_NEW_EVENT:
      return {
        ...state,
        titleNewEvent: action.newValue,
      };

    case DATE_NEW_EVENT:
      return {
        ...state,
        dateNewEvent: action.newValue,
      };

    case PLACE_NEW_EVENT:
      return {
        ...state,
        placeNewEvent: action.newValue,
      };

    case AUTHOR_NEW_EVENT:
      return {
        ...state,
        authorNewEvent: action.newValue,
      };

    case DESCRIB_NEW_EVENT:
      return {
        ...state,
        describNewEvent: action.newValue,
      };
    default:
      return state;
  }
};

export default eventReducer;
