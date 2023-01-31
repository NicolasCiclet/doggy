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
