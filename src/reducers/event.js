import events from 'src/data/eventForTest';

const initialState = {
  eventsToDisplay: events,
};

const eventReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default eventReducer;
