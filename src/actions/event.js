// I create const, it's better for autocompletion
export const TITLE_NEW_EVENT = 'TITLE_NEW_EVENT';
export const DATE_NEW_EVENT = 'DATE_NEW_EVENT';
export const PLACE_NEW_EVENT = 'PLACE_NEW_EVENT';
export const DESCRIB_NEW_EVENT = 'DESCRIB_NEW_EVENT';

// Action that sends a new event to the Back
export const SUBMIT_FORM_NEW_EVENT = 'SUBMIT_FORM_NEW_EVENT';

// To display the pop-up delete
export const SHOW_DELETE_EVENT = 'SHOW_DELETE_EVENT';
// To delete a event
export const DELETE_EVENT = 'DELETE_EVENT';

// Action that sends a update event to the Back
export const SUBMIT_FORM_UPDATE_EVENT = 'SUBMIT_FORM_UPDATE_EVENT';

// To get connected user events
export const GET_CONNECTED_EVENTS = 'GET_CONNECTED_EVENTS';
// To stock connected user events in the state
export const STOCK_CONNECTED_EVENTS = 'STOCK_CONNECTED_EVENTS';

// To get all events of the BDD
export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
// To stock them in the state
export const STOCK_ALL_EVENTS = 'STOCK_ALL_EVENTS';

// To get watched user events
export const GET_USER_EVENTS = 'GET_USER_EVENTS';
// To stock them in the state
export const STOCK_USER_EVENTS = 'STOCK_USER_EVENTS';

// To confirm user event has been created
export const NEW_EVENT_CREATED = 'NEW_EVENT_CREATED';
// To confirm user event has been deleted
export const NEW_EVENT_DELETED = 'NEW_EVENT_DELETED';

// To stock id of update event
export const STOCK_ID_UPDATE_EVENT = 'STOCK_ID_UPDATE_EVENT';

// To change the value of event difficulty in the state
export const CHANGE_EVENT_DIFFICULTY = 'CHANGE_EVENT_DIFFICULTY';

// To change the value of event itinerary in the state
export const CHANGE_EVENT_ITINERARY = 'CHANGE_EVENT_ITINERARY';

// To open the filter window
export const SHOW_EVENT_FILTER = 'SHOW_EVENT_FILTER';

// To get RANDOM event information for carousel, from api back
export const GET_RANDOM_EVENT = 'GET_RANDOM_EVENT';
// To put RANDOM event information for carousel, in state
export const DISPLAY_RANDOM_EVENT = 'DISPLAY_RANDOM_EVENT';

// add value current event, in value newEvent when updateEvent form is open
export const EVENT_FROM_UPDATE_INPUT = 'EVENT_FROM_UPDATE_INPUT';

// reset all event's values in state
export const RESET_EVENT_VALUE = 'RESET_EVENT_VALUE';

export const titleNewEvent = (value) => ({
  type: TITLE_NEW_EVENT,
  newValue: value,
});

export const dateNewEvent = (value) => ({
  type: DATE_NEW_EVENT,
  newValue: value,
});

export const placeNewEvent = (value) => ({
  type: PLACE_NEW_EVENT,
  newValue: value,
});

export const describNewEvent = (value) => ({
  type: DESCRIB_NEW_EVENT,
  newValue: value,
});

export const submitFormNewEvent = (value) => ({
  type: SUBMIT_FORM_NEW_EVENT,
  newValue: value,
});

export const showDeleteEvent = () => ({
  type: SHOW_DELETE_EVENT,
});

export const deleteEvent = () => ({
  type: DELETE_EVENT,
});

export const submitFormUpdateEvent = (value) => ({
  type: SUBMIT_FORM_UPDATE_EVENT,
  newValue: value,
});

export const getConnectedEvents = () => ({
  type: GET_CONNECTED_EVENTS,
});

export const stockConnectedEvents = (events) => ({
  type: STOCK_CONNECTED_EVENTS,
  events: events,
});

export const getAllEvents = () => ({
  type: GET_ALL_EVENTS,
});

export const stockAllEvents = (events) => ({
  type: STOCK_ALL_EVENTS,
  events: events,
});

export const getUserEvents = () => ({
  type: GET_USER_EVENTS,
});

export const stockUserEvents = (events) => ({
  type: STOCK_USER_EVENTS,
  events: events,
});

export const newEventCreated = () => ({
  type: NEW_EVENT_CREATED,
});

export const stockIdUpdateEvent = (id) => ({
  type: STOCK_ID_UPDATE_EVENT,
  id: id,
});

export const newEventDeleted = () => ({
  type: NEW_EVENT_DELETED,
});

export const changeEventDifficulty = (difficulty) => ({
  type: CHANGE_EVENT_DIFFICULTY,
  difficulty: difficulty,
});

export const changeEventItinerary = (itinerary) => ({
  type: CHANGE_EVENT_ITINERARY,
  itinerary: itinerary,
});

export const showEventFilter = () => ({
  type: SHOW_EVENT_FILTER,
});

export const getRandomEvent = () => ({
  type: GET_RANDOM_EVENT,
});

export const displayRandomEvent = (value) => ({
  type: DISPLAY_RANDOM_EVENT,
  value: value,
});

// add value current event, in value newEvent when updateEvent form is open
export const eventFromUpdateInput = (title, date, describ) => ({
  type: EVENT_FROM_UPDATE_INPUT,
  title: title,
  date: date,
  describ: describ,
});

// reset all event's values in state
export const resetEventValue = () => ({
  type: RESET_EVENT_VALUE,
});
