// I create const, it's better for autocompletion
export const TITLE_NEW_EVENT = 'TITLE_NEW_EVENT';
export const DATE_NEW_EVENT = 'DATE_NEW_EVENT';
export const START_NEW_EVENT = 'START_NEW_EVENT';
export const END_NEW_EVENT = 'END_NEW_EVENT';
export const PLACE_NEW_EVENT = 'PLACE_NEW_EVENT';
export const AUTHOR_NEW_EVENT = 'AUTHOR_NEW_EVENT';
export const DESCRIB_NEW_EVENT = 'DESCRIB_NEW_EVENT';

export const titleNewEvent = (value) => ({
  type: TITLE_NEW_EVENT,
  newValue: value,
});

export const dateNewEvent = (value) => ({
  type: DATE_NEW_EVENT,
  newValue: value,
});

export const startNewEvent = (value) => ({
  type: START_NEW_EVENT,
  newValue: value,
});

export const endNewEvent = (value) => ({
  type: END_NEW_EVENT,
  newValue: value,
});

export const placeNewEvent = (value) => ({
  type: PLACE_NEW_EVENT,
  newValue: value,
});

export const authorNewEvent = (value) => ({
  type: AUTHOR_NEW_EVENT,
  newValue: value,
});

export const describNewEvent = (value) => ({
  type: DESCRIB_NEW_EVENT,
  newValue: value,
});
