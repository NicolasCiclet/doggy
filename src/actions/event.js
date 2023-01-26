// I create const, it's better for autocompletion
export const TITLE_NEW_EVENT = 'TITLE_NEW_EVENT';
export const DATE_NEW_EVENT = 'DATE_NEW_EVENT';
export const PLACE_NEW_EVENT = 'PLACE_NEW_EVENT';
export const DESCRIB_NEW_EVENT = 'DESCRIB_NEW_EVENT';

// Action that sends a new event to the Back
export const SUBMIT_FORM_NEW_EVENT = 'SUBMIT_FORM_NEW_EVENT';

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
