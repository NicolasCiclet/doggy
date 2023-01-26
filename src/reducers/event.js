import events from 'src/data/eventForTest';
import {
  SHOW_DELETE_EVENT, DATE_NEW_EVENT, DESCRIB_NEW_EVENT, PLACE_NEW_EVENT, TITLE_NEW_EVENT,
} from '../actions/event';

const initialState = {
  eventsToDisplay: events,
  titleNewEvent: '',
  dateNewEvent: '',
  placeNewEvent: '',
  describNewEvent: '',

  // To display or not the delete pop-up
  eventDelete: false,
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

    case DESCRIB_NEW_EVENT:
      return {
        ...state,
        describNewEvent: action.newValue,
      };

      // To display the pop-up delete
    case SHOW_DELETE_EVENT:
      return {
        ...state,
        // modification(s) d'info(s) du state, ici on va chercher dans le payload de l'action
        eventDelete: !state.eventDelete,
      };
    default:
      return state;
  }
};

export default eventReducer;
