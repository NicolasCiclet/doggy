import events from 'src/data/eventForTest';
import {
  SHOW_DELETE_EVENT, DATE_NEW_EVENT, DESCRIB_NEW_EVENT, PLACE_NEW_EVENT, TITLE_NEW_EVENT,
  STOCK_CONNECTED_EVENTS, STOCK_USER_EVENTS, NEW_EVENT_CREATED, STOCK_ALL_EVENTS,
  STOCK_ID_UPDATE_EVENT, NEW_EVENT_DELETED, CHANGE_EVENT_DIFFICULTY, SHOW_EVENT_FILTER,
  CHANGE_EVENT_ITINERARY,
  DISPLAY_RANDOM_EVENT,
  RESET_EVENT_VALUE,
} from '../actions/event';

const initialState = {
  eventsToDisplay: events,
  // all events
  eventsApi: [],
  randomEventsToDisplay: [],

  connectedEvents: [],
  watchEvents: [],

  titleNewEvent: '',
  dateNewEvent: '',
  placeNewEvent: '',
  describNewEvent: '',
  pictureNewEvent: 'events/default.svg',

  // only use to show or hide succes message
  newEventCreated: false,

  // To display or not the delete pop-up
  eventDelete: false,

  // only use to show or hide succes message when event is delete
  eventDeleted: false,

  // update or delete event id
  updateId: 0,

  // filter on difficulty of the event
  difficulty: '',

  // filter on itinerary name of the event
  itinerary: '',

  // To open or close the filter window
  showFilter: false,
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

      // stock all events from API back
    case STOCK_ALL_EVENTS:
      return {
        ...state,
        eventsApi: action.events,
      };

    case STOCK_CONNECTED_EVENTS:
      return {
        ...state,
        connectedEvents: action.events,
      };

    case STOCK_USER_EVENTS:
      return {
        ...state,
        watchEvents: action.events,
      };

      // when new event is created, value pass true
    case NEW_EVENT_CREATED:
      return {
        ...state,
        newEventCreated: !state.newEventCreated,
      };

    case STOCK_ID_UPDATE_EVENT:
      return {
        ...state,
        updateId: action.id,
      };

    case NEW_EVENT_DELETED:
      return {
        ...state,
        eventDeleted: !state.eventDeleted,
      };

    case CHANGE_EVENT_DIFFICULTY:
      return {
        ...state,
        difficulty: action.difficulty,
      };

    case CHANGE_EVENT_ITINERARY:
      return {
        ...state,
        itinerary: action.itinerary,
      };

    case SHOW_EVENT_FILTER:
      return {
        ...state,
        showFilter: !state.showFilter,
      };

    case DISPLAY_RANDOM_EVENT:
      return {
        ...state,
        randomEventsToDisplay: action.value,
      };

    case RESET_EVENT_VALUE:
      return {
        ...state,
        titleNewEvent: '',
        dateNewEvent: '',
        placeNewEvent: '',
        describNewEvent: '',
      };

    default:
      return state;
  }
};

export default eventReducer;
